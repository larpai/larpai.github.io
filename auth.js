/**
 * auth.js — larp.ai authentication & results storage
 * All data stored in localStorage. No server required.
 */

window.LarpAuth = (() => {
    const navigate = (url) => {
        if (window.larpNavigate) return window.larpNavigate(url);
        window.location.href = url;
    };

    const hashPassword = (pw) => {
        let hash = 0;
        const str = pw + 'larp_salt_2024';
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash.toString(36);
    };

    const getUsers = () => { try { return JSON.parse(localStorage.getItem('larp_users') || '{}'); } catch { return {}; } };
    const saveUsers = (u) => localStorage.setItem('larp_users', JSON.stringify(u));
    const getSession = () => { try { return JSON.parse(localStorage.getItem('larp_session') || 'null'); } catch { return null; } };
    const setSession = (email, name) => localStorage.setItem('larp_session', JSON.stringify({ email, name, loggedInAt: Date.now() }));
    const clearSession = () => localStorage.removeItem('larp_session');
    const isLoggedIn = () => getSession() !== null;
    const currentUser = () => getSession();

    const signup = (name, email, password) => {
        if (!name || name.trim().length < 2) return { ok: false, error: 'Name must be at least 2 characters.' };
        if (!email || !email.includes('@')) return { ok: false, error: 'Please enter a valid email address.' };
        if (!password || password.length < 6) return { ok: false, error: 'Password must be at least 6 characters.' };
        const users = getUsers();
        const key = email.toLowerCase().trim();
        if (users[key]) return { ok: false, error: 'An account with this email already exists.' };
        users[key] = { name: name.trim(), email: key, passwordHash: hashPassword(password), createdAt: Date.now() };
        saveUsers(users);
        return { ok: true };
    };

    const login = (email, password) => {
        if (!email || !password) return { ok: false, error: 'Please fill in all fields.' };
        const users = getUsers();
        const key = email.toLowerCase().trim();
        const user = users[key];
        if (!user) return { ok: false, error: 'No account found with this email.' };
        if (user.passwordHash !== hashPassword(password)) return { ok: false, error: 'Incorrect password.' };
        setSession(user.email, user.name);
        return { ok: true, name: user.name };
    };

    const logout = () => { clearSession(); navigate('home.html'); };

    const saveResult = (scores, measurements, gender) => {
        const result = { date: Date.now(), gender: gender || 'unknown', overall: scores.overall, rating: scores.looksmaxxRating, scores: { ...scores }, measurements: { ...measurements } };
        const session = getSession();
        if (session) {
            const key = `larp_results_${session.email}`;
            let history = [];
            try { history = JSON.parse(localStorage.getItem(key) || '[]'); } catch {}
            history.unshift(result);
            if (history.length > 20) history = history.slice(0, 20);
            localStorage.setItem(key, JSON.stringify(history));
        } else {
            localStorage.setItem('larp_results_guest', JSON.stringify([result]));
        }
    };

    const getResults = () => {
        const session = getSession();
        if (session) { try { return JSON.parse(localStorage.getItem(`larp_results_${session.email}`) || '[]'); } catch { return []; } }
        try { return JSON.parse(localStorage.getItem('larp_results_guest') || '[]'); } catch { return []; }
    };

    const showToast = (message, type = 'success', duration = 4000) => {
        const existing = document.getElementById('_larpToast');
        if (existing) existing.remove();
        const colors = { success: { bg: '#061a0d', border: '#30d158', text: '#30d158' }, error: { bg: '#1a0606', border: '#ff453a', text: '#ff453a' }, info: { bg: '#060e1a', border: '#5ac8fa', text: '#5ac8fa' } };
        const c = colors[type] || colors.info;
        const toast = document.createElement('div');
        toast.id = '_larpToast';
        toast.style.cssText = `position:fixed;top:20px;left:50%;transform:translateX(-50%) translateY(-100px);z-index:9999;background:${c.bg};border:1px solid ${c.border};color:${c.text};font-size:13px;font-weight:600;padding:12px 28px;border-radius:12px;font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif;box-shadow:0 8px 32px rgba(0,0,0,0.6);transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1);white-space:nowrap;pointer-events:none;`;
        toast.textContent = message;
        document.body.appendChild(toast);
        requestAnimationFrame(() => requestAnimationFrame(() => { toast.style.transform = 'translateX(-50%) translateY(0)'; }));
        setTimeout(() => { toast.style.transform = 'translateX(-50%) translateY(-100px)'; setTimeout(() => toast.remove(), 400); }, duration);
    };

    const showLoginRequiredPopup = (message) => {
        const existing = document.getElementById('_loginRequiredPopup');
        if (existing) existing.remove();
        const overlay = document.createElement('div');
        overlay.id = '_loginRequiredPopup';
        overlay.style.cssText = `position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:8000;display:flex;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif;`;
        overlay.innerHTML = `<div style="background:#141414;border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:36px 32px;max-width:360px;width:calc(100% - 40px);text-align:center;animation:_popIn 0.25s ease;box-shadow:0 24px 64px rgba(0,0,0,0.8);"><style>@keyframes _popIn{from{opacity:0;transform:scale(0.92) translateY(12px)}to{opacity:1;transform:scale(1) translateY(0)}}</style><div style="font-size:32px;margin-bottom:16px;">🔒</div><div style="font-size:18px;font-weight:700;color:#fff;margin-bottom:10px;">Login Required</div><div style="font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6;margin-bottom:28px;">${message}</div><div style="display:flex;gap:10px;"><button id="_lrpClose" style="flex:1;padding:13px;border-radius:12px;border:1px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.6);font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;">Cancel</button><button id="_lrpLogin" style="flex:1;padding:13px;border-radius:12px;border:none;background:#fff;color:#000;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;">Log In / Sign Up</button></div></div>`;
        document.body.appendChild(overlay);
        overlay.querySelector('#_lrpClose').onclick = () => overlay.remove();
        overlay.querySelector('#_lrpLogin').onclick = () => { navigate('login.html'); };
        overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
    };

    return { signup, login, logout, isLoggedIn, currentUser, saveResult, getResults, showToast, showLoginRequiredPopup };
})();
