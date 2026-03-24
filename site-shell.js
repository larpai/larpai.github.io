(function () {
    const FILE = (() => {
        const path = window.location.pathname.split('/').pop();
        return path || 'index.html';
    })();

    const PAGE = (() => {
        if (FILE === 'home.html' || FILE === 'index.html') return 'home';
        if (FILE === 'login.html') return 'login';
        if (FILE === 'signup.html') return 'signup';
        if (FILE === 'app.html') return 'app';
        if (FILE === 'dashboard.html') return 'dashboard';
        if (FILE === 'guide.html') return 'guide';
        if (FILE === 'playbook.html') return 'playbook';
        if (FILE === 'privacy.html') return 'privacy';
        if (FILE === 'roadmap.html') return 'roadmap';
        return 'generic';
    })();

    const ROUTES = [
        { file: 'home.html', label: 'Home', desc: 'Main landing page' },
        { file: 'app.html', label: 'Analysis', desc: 'Run the facial scan' },
        { file: 'dashboard.html', label: 'Dashboard', desc: 'Saved scans and progress' },
        { file: 'guide.html', label: 'Guide', desc: 'Photo prep and scan quality' },
        { file: 'playbook.html', label: 'Playbook', desc: 'Looksmaxxing-oriented references' },
        { file: 'roadmap.html', label: 'Roadmap', desc: 'Product direction and plans' },
        { file: 'privacy.html', label: 'Privacy', desc: 'Local-first storage and data notes' },
        { file: 'login.html', label: 'Login', desc: 'Account access' },
        { file: 'signup.html', label: 'Sign Up', desc: 'Create account' }
    ];

    const pageThemes = {
        home: {
            badge: 'Site Expansion',
            message: 'New layers across the site: scan prep, playbook pages, quick navigation, and richer motion.',
            action: { href: 'guide.html', label: 'See Guide' }
        },
        login: {
            badge: 'Member Access',
            message: 'Account pages now live inside a bigger site shell with direct routes to guide, playbook, and privacy.',
            action: { href: 'playbook.html', label: 'Open Playbook' }
        },
        signup: {
            badge: 'Join Larp.ai',
            message: 'Create an account to unlock readable results, saved scans, and the expanded site layer.',
            action: { href: 'privacy.html', label: 'Privacy Notes' }
        },
        app: {
            badge: 'Scan Layer',
            message: 'The analysis page now sits inside the wider product system with shortcuts, quick nav, and support pages.',
            action: { href: 'guide.html', label: 'Photo Guide' }
        },
        dashboard: {
            badge: 'Progress Layer',
            message: 'The dashboard can now branch into guide, playbook, roadmap, and privacy without leaving the product context.',
            action: { href: 'roadmap.html', label: 'See Roadmap' }
        },
        guide: {
            badge: 'Scan Guide',
            message: 'This page is part of the new support layer for better scans and cleaner baselines.',
            action: { href: 'app.html', label: 'Run Scan' }
        },
        playbook: {
            badge: 'Playbook',
            message: 'Reference page for practical interpretation without changing the core analysis logic.',
            action: { href: 'dashboard.html', label: 'View Dashboard' }
        },
        roadmap: {
            badge: 'Roadmap',
            message: 'Product direction, active ideas, and the next layers now have a dedicated home.',
            action: { href: 'home.html', label: 'Back Home' }
        },
        privacy: {
            badge: 'Privacy Layer',
            message: 'Local-first handling, guest previews, and readable account modes now have a dedicated page.',
            action: { href: 'signup.html', label: 'Create Account' }
        },
        generic: {
            badge: 'Larp.ai',
            message: 'Expanded site shell active.',
            action: { href: 'home.html', label: 'Home' }
        }
    };

    const shortcuts = [
        { key: 'G', label: 'Guide', route: 'guide.html', desc: 'Open scan quality guide' },
        { key: 'P', label: 'Playbook', route: 'playbook.html', desc: 'Open looksmaxxing playbook' },
        { key: 'R', label: 'Roadmap', route: 'roadmap.html', desc: 'Open roadmap page' },
        { key: 'H', label: 'Home', route: 'home.html', desc: 'Go to homepage' },
        { key: 'A', label: 'Analysis', route: 'app.html', desc: 'Open analysis page' },
        { key: 'D', label: 'Dashboard', route: 'dashboard.html', desc: 'Open dashboard' },
        { key: '/', label: 'Command', route: null, desc: 'Open quick command palette' }
    ];

    function currentUser() {
        try {
            return window.LarpAuth && typeof window.LarpAuth.currentUser === 'function'
                ? window.LarpAuth.currentUser()
                : null;
        } catch {
            return null;
        }
    }

    function navigate(url) {
        if (window.larpNavigate) {
            window.larpNavigate(url);
            return;
        }
        window.location.href = url;
    }

    function el(tag, className, html) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (html != null) node.innerHTML = html;
        return node;
    }

    function bodyReady() {
        document.documentElement.classList.add('shell-ready');
        document.body.dataset.page = PAGE;
    }

    function makeProgressBar() {
        const bar = el('div', 'shell-progress');
        document.body.appendChild(bar);
        const update = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const pct = max <= 0 ? 0 : (window.scrollY / max) * 100;
            bar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
        };
        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
    }

    function makeCursorHalo() {
        if (!window.matchMedia('(pointer:fine)').matches) return;
        const halo = el('div', 'shell-cursor');
        document.body.appendChild(halo);
        document.addEventListener('pointermove', (event) => {
            halo.style.opacity = '1';
            halo.style.left = `${event.clientX}px`;
            halo.style.top = `${event.clientY}px`;
        });
        document.addEventListener('pointerleave', () => {
            halo.style.opacity = '0';
        });
    }

    function makeAnnouncement() {
        if (PAGE === 'app') return;
        const theme = pageThemes[PAGE] || pageThemes.generic;
        const wrapper = el('div', 'shell-announcement');
        const inner = el('div', 'shell-announcement-inner');
        const copy = el(
            'div',
            'shell-announcement-copy',
            `<span class="shell-announcement-badge">${theme.badge}</span><span>${theme.message}</span>`
        );
        const action = el('a', 'shell-announcement-action', `${theme.action.label} <span>→</span>`);
        action.href = theme.action.href;
        inner.append(copy, action);
        wrapper.appendChild(inner);
        document.body.insertBefore(wrapper, document.body.firstChild);
    }

    function makeDock() {
        const dock = el('div', 'shell-dock');
        dock.innerHTML = `
            <a class="shell-dock-link" href="home.html">Home</a>
            <a class="shell-dock-link" href="guide.html">Guide</a>
            <a class="shell-dock-link" href="playbook.html">Playbook</a>
            <a class="shell-dock-link" href="privacy.html">Privacy</a>
            <button class="shell-dock-btn" data-shell-command>Search</button>
            <button class="shell-dock-btn is-primary" data-shell-quick-action>${PAGE === 'app' ? 'Scan' : 'Go'}</button>
        `;
        document.body.appendChild(dock);
        dock.querySelector('[data-shell-quick-action]')?.addEventListener('click', () => {
            if (PAGE === 'app') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            if (PAGE === 'dashboard') {
                navigate('app.html');
                return;
            }
            if (PAGE === 'login' || PAGE === 'signup') {
                navigate('app.html');
                return;
            }
            navigate(currentUser() ? 'dashboard.html' : 'signup.html');
        });
        dock.querySelector('[data-shell-command]')?.addEventListener('click', openCommand);
    }

    let commandRoot;
    let commandInput;
    let commandList;
    let commandActive = 0;
    let commandItems = [];

    function getCommandEntries() {
        const user = currentUser();
        const base = ROUTES
            .filter(route => !(route.file === 'dashboard.html' && !user))
            .map(route => ({
                type: 'route',
                label: route.label,
                desc: route.desc,
                key: route.label[0],
                action: () => navigate(route.file)
            }));
        const extras = [
            {
                type: 'action',
                label: 'Toggle Theme',
                desc: 'Switch dark and light theme',
                key: 'T',
                action: () => {
                    const current = document.documentElement.getAttribute('data-theme') || 'dark';
                    const next = current === 'dark' ? 'light' : 'dark';
                    document.documentElement.setAttribute('data-theme', next);
                    localStorage.setItem('larp_theme', next);
                    document.querySelectorAll('#themeToggle').forEach(node => {
                        node.textContent = next === 'dark' ? '🌙' : '☀️';
                    });
                }
            },
            {
                type: 'action',
                label: 'Scroll To Top',
                desc: 'Jump back to the top of the page',
                key: '↑',
                action: () => window.scrollTo({ top: 0, behavior: 'smooth' })
            },
            {
                type: 'action',
                label: 'Open Leaderboard',
                desc: 'Jump to leaderboard section if available',
                key: 'L',
                action: () => {
                    const target = document.getElementById('leaderboardSection');
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        return;
                    }
                    navigate('dashboard.html');
                }
            }
        ];
        if (!user) {
            extras.push({
                type: 'action',
                label: 'Create Account',
                desc: 'Go to sign up page',
                key: 'C',
                action: () => navigate('signup.html')
            });
        }
        return [...base, ...extras];
    }

    function renderCommands(entries) {
        commandItems = entries;
        commandActive = Math.min(commandActive, Math.max(entries.length - 1, 0));
        commandList.innerHTML = '';
        if (!entries.length) {
            commandList.innerHTML = `<div class="shell-command-item"><div class="shell-command-item-main"><strong>No matches</strong><span>Try another term.</span></div></div>`;
            return;
        }
        entries.forEach((entry, index) => {
            const item = el('button', `shell-command-item${index === commandActive ? ' is-active' : ''}`);
            item.type = 'button';
            item.innerHTML = `
                <div class="shell-command-item-main">
                    <strong>${entry.label}</strong>
                    <span>${entry.desc}</span>
                </div>
                <span class="shell-command-key">${entry.key}</span>
            `;
            item.addEventListener('click', () => {
                entry.action();
                closeCommand();
            });
            commandList.appendChild(item);
        });
    }

    function buildCommand() {
        commandRoot = el('div', 'shell-command');
        commandRoot.innerHTML = `
            <div class="shell-command-panel" role="dialog" aria-modal="true" aria-label="Quick command">
                <div class="shell-command-top">
                    <label>Quick Command</label>
                    <input class="shell-command-input" type="text" placeholder="Search pages, actions, tools..." />
                </div>
                <div class="shell-command-list"></div>
            </div>
        `;
        document.body.appendChild(commandRoot);
        commandInput = commandRoot.querySelector('.shell-command-input');
        commandList = commandRoot.querySelector('.shell-command-list');
        renderCommands(getCommandEntries());
        commandRoot.addEventListener('click', (event) => {
            if (event.target === commandRoot) closeCommand();
        });
        commandInput.addEventListener('input', () => {
            const q = commandInput.value.trim().toLowerCase();
            const entries = getCommandEntries().filter(entry => {
                return entry.label.toLowerCase().includes(q) || entry.desc.toLowerCase().includes(q);
            });
            commandActive = 0;
            renderCommands(entries);
        });
        commandInput.addEventListener('keydown', (event) => {
            const items = [...commandList.querySelectorAll('.shell-command-item')];
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                commandActive = Math.min(commandActive + 1, items.length - 1);
                renderCommands(commandItems);
                return;
            }
            if (event.key === 'ArrowUp') {
                event.preventDefault();
                commandActive = Math.max(commandActive - 1, 0);
                renderCommands(commandItems);
                return;
            }
            if (event.key === 'Enter' && commandItems[commandActive]) {
                event.preventDefault();
                commandItems[commandActive].action();
                closeCommand();
                return;
            }
            if (event.key === 'Escape') {
                closeCommand();
            }
        });
    }

    function openCommand() {
        if (!commandRoot) buildCommand();
        commandRoot.classList.add('is-open');
        commandInput.value = '';
        commandActive = 0;
        renderCommands(getCommandEntries());
        setTimeout(() => commandInput.focus(), 30);
    }

    function closeCommand() {
        commandRoot?.classList.remove('is-open');
    }

    function makeBackTop() {
        const button = el('button', 'shell-backtop', '↑');
        button.type = 'button';
        button.title = 'Back to top';
        button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        document.body.appendChild(button);
        const update = () => {
            button.classList.toggle('is-visible', window.scrollY > 480);
        };
        update();
        window.addEventListener('scroll', update, { passive: true });
    }

    function applyReveal() {
        const targets = document.querySelectorAll('.shell-reveal, .shell-tile, .shell-check, .shell-step, .shell-kpi, .shell-insight-card, .shell-page-link');
        targets.forEach(node => node.classList.add('shell-reveal'));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('is-visible');
            });
        }, { threshold: 0.12 });
        document.querySelectorAll('.shell-reveal').forEach(node => observer.observe(node));
    }

    function applyTilt() {
        if (!window.matchMedia('(pointer:fine)').matches) return;
        const nodes = document.querySelectorAll('.shell-tile, .shell-check, .shell-kpi, .shell-page-link, .shell-insight-card');
        nodes.forEach(node => {
            node.classList.add('shell-tilt');
            node.addEventListener('pointermove', (event) => {
                const rect = node.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width - 0.5;
                const y = (event.clientY - rect.top) / rect.height - 0.5;
                node.style.transform = `rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg) translateY(-4px)`;
            });
            node.addEventListener('pointerleave', () => {
                node.style.transform = '';
            });
        });
    }

    function applyCounters() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const node = entry.target;
                if (node.dataset.counted === 'true') return;
                const value = Number(node.dataset.countValue || '0');
                const decimals = Number(node.dataset.countDecimals || '0');
                const prefix = node.dataset.countPrefix || '';
                const suffix = node.dataset.countSuffix || '';
                const duration = Number(node.dataset.countDuration || '1200');
                const start = performance.now();
                node.dataset.counted = 'true';
                const frame = (time) => {
                    const progress = Math.min(1, (time - start) / duration);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = value * eased;
                    node.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;
                    if (progress < 1) requestAnimationFrame(frame);
                };
                requestAnimationFrame(frame);
                observer.unobserve(node);
            });
        }, { threshold: 0.35 });
        document.querySelectorAll('[data-count-value]').forEach(node => {
            node.classList.add('shell-count');
            observer.observe(node);
        });
    }

    function applyTabs() {
        document.querySelectorAll('[data-shell-tabs]').forEach(root => {
            const buttons = [...root.querySelectorAll('[data-shell-tab]')];
            const panels = [...root.querySelectorAll('[data-shell-panel]')];
            if (!buttons.length || !panels.length) return;
            const setActive = (id) => {
                buttons.forEach(button => {
                    button.classList.toggle('is-active', button.dataset.shellTab === id);
                });
                panels.forEach(panel => {
                    panel.classList.toggle('is-active', panel.dataset.shellPanel === id);
                });
            };
            buttons.forEach(button => {
                button.addEventListener('click', () => setActive(button.dataset.shellTab));
            });
            setActive(buttons[0].dataset.shellTab);
        });
    }

    function applyFaqs() {
        document.querySelectorAll('.shell-faq-item').forEach(item => {
            const btn = item.querySelector('.shell-faq-btn');
            btn?.addEventListener('click', () => {
                item.classList.toggle('is-open');
            });
        });
    }

    function makeShortcutMap() {
        document.addEventListener('keydown', (event) => {
            const activeTag = document.activeElement && document.activeElement.tagName;
            const typing = activeTag === 'INPUT' || activeTag === 'TEXTAREA';
            if (!typing && event.key === '/') {
                event.preventDefault();
                openCommand();
                return;
            }
            if (event.key === 'Escape') {
                closeCommand();
                return;
            }
            if (typing || event.metaKey || event.ctrlKey || event.altKey) return;
            const key = event.key.toUpperCase();
            if (key === 'G') navigate('guide.html');
            if (key === 'P') navigate('playbook.html');
            if (key === 'R') navigate('roadmap.html');
            if (key === 'H') navigate('home.html');
            if (key === 'A') navigate('app.html');
            if (key === 'D' && currentUser()) navigate('dashboard.html');
        });
    }

    function makeAutoSections() {
        if (PAGE === 'home') {
            addHomeSections();
        } else if (PAGE === 'dashboard') {
            addDashboardSections();
        } else if (PAGE === 'app') {
            addAppSections();
        } else if (PAGE === 'login' || PAGE === 'signup') {
            addAuthSections();
        }
    }

    function insertAfterFirstMatch(selectors, node) {
        for (const selector of selectors) {
            const target = document.querySelector(selector);
            if (target && target.parentNode) {
                target.parentNode.insertBefore(node, target.nextSibling);
                return true;
            }
        }
        return false;
    }

    function appendBeforeFooter(node) {
        const footer = document.querySelector('footer');
        if (footer && footer.parentNode) {
            footer.parentNode.insertBefore(node, footer);
            return true;
        }
        document.body.appendChild(node);
        return false;
    }

    function addHomeSections() {
        const insight = el('section', 'shell-insight');
        insight.innerHTML = `
            <div class="shell-insight-card">
                <div class="shell-hero-orb a"></div>
                <div class="shell-hero-orb b"></div>
                <div class="shell-floating-note n1">baseline</div>
                <div class="shell-floating-note n2">angles</div>
                <div class="shell-floating-note n3">readability</div>
                <div class="shell-insight-kicker">What Was Added</div>
                <div class="shell-insight-title">A bigger site around the scan.</div>
                <div class="shell-insight-copy">The app is no longer just a landing page plus a scanner. There is now a guide layer, a playbook layer, a roadmap layer, and a privacy layer so the site feels fuller without changing the core analysis model.</div>
                <div class="shell-insight-grid">
                    <div class="shell-micro"><span class="shell-micro-label">Site Pages</span><span class="shell-micro-value" data-count-value="9">0</span><span class="shell-micro-copy">Main routes now in the site shell</span></div>
                    <div class="shell-micro"><span class="shell-micro-label">Quick Actions</span><span class="shell-micro-value" data-count-value="14">0</span><span class="shell-micro-copy">Keyboard and dock shortcuts</span></div>
                    <div class="shell-micro"><span class="shell-micro-label">New Layers</span><span class="shell-micro-value" data-count-value="5">0</span><span class="shell-micro-copy">Guide, playbook, roadmap, privacy, shell</span></div>
                </div>
            </div>
            <div class="shell-insight-card">
                <div class="shell-insight-kicker">Quick Reasons</div>
                <div class="shell-side-list">
                    <div class="shell-side-item"><strong>Guide page</strong><span>Better scans need dedicated prep instead of hiding all instructions inside the app.</span></div>
                    <div class="shell-side-item"><strong>Playbook page</strong><span>Users want contextual reading, not just a number floating alone.</span></div>
                    <div class="shell-side-item"><strong>Roadmap page</strong><span>Product direction is now visible instead of implied.</span></div>
                    <div class="shell-side-item"><strong>Privacy page</strong><span>Guest mode, local-first storage, and readable account mode now have a dedicated explanation.</span></div>
                </div>
            </div>
        `;
        insertAfterFirstMatch(['#hero', '.hero', '.site-shell .hero'], insight);

        const pageNav = el('section', 'shell-page-nav');
        pageNav.innerHTML = `
            <a class="shell-page-link" href="guide.html"><strong>Scan Guide</strong><span>Prep, framing, lighting, and baseline quality rules.</span></a>
            <a class="shell-page-link" href="playbook.html"><strong>Playbook</strong><span>Looksmaxxing-oriented language and practical reading notes.</span></a>
            <a class="shell-page-link" href="roadmap.html"><strong>Roadmap</strong><span>Where the product can go next without bloating the core flow.</span></a>
            <a class="shell-page-link" href="privacy.html"><strong>Privacy</strong><span>Local-first data notes, guest previews, and account storage.</span></a>
            <a class="shell-page-link" href="app.html"><strong>Run Analysis</strong><span>Jump straight into the scan flow when you are ready.</span></a>
        `;
        appendBeforeFooter(pageNav);

        const marquee = el('div', 'shell-marquee');
        marquee.innerHTML = `
            <div class="shell-marquee-track">
                <span><strong>PSL</strong> structure read</span>
                <span><strong>Guide</strong> photo prep</span>
                <span><strong>Playbook</strong> reading notes</span>
                <span><strong>Roadmap</strong> future layers</span>
                <span><strong>Privacy</strong> local-first storage</span>
                <span><strong>PSL</strong> structure read</span>
                <span><strong>Guide</strong> photo prep</span>
                <span><strong>Playbook</strong> reading notes</span>
                <span><strong>Roadmap</strong> future layers</span>
                <span><strong>Privacy</strong> local-first storage</span>
            </div>
        `;
        appendBeforeFooter(marquee);
    }

    function addDashboardSections() {
        const kpis = el('section', 'shell-kpi-wrap');
        kpis.innerHTML = `
            <div class="shell-kpi"><span class="shell-kpi-label">Saved Layer</span><span class="shell-kpi-value" data-count-value="1" data-countDecimals="0">0</span><span class="shell-kpi-sub">Readable accounts only</span></div>
            <div class="shell-kpi"><span class="shell-kpi-label">Quick Compare</span><span class="shell-kpi-value" data-count-value="3" data-countDecimals="0">0</span><span class="shell-kpi-sub">Peak, recent, average</span></div>
            <div class="shell-kpi"><span class="shell-kpi-label">Guide Link</span><span class="shell-kpi-value" data-countValue="1">1</span><span class="shell-kpi-sub">Direct route to better scan quality</span></div>
            <div class="shell-kpi"><span class="shell-kpi-label">Playbook Link</span><span class="shell-kpi-value" data-count-value="1">0</span><span class="shell-kpi-sub">Interpretation page now lives beside the dashboard</span></div>
            <div class="shell-kpi"><span class="shell-kpi-label">Shell Active</span><span class="shell-kpi-value">v5</span><span class="shell-kpi-sub">Expanded product wrapper</span></div>
        `;
        insertAfterFirstMatch(['.dash-hero', 'nav'], kpis);

        const pageNav = el('section', 'shell-page-nav');
        pageNav.innerHTML = `
            <a class="shell-page-link" href="guide.html"><strong>Guide</strong><span>Fix bad scan quality before comparing old results.</span></a>
            <a class="shell-page-link" href="playbook.html"><strong>Playbook</strong><span>Read the broader language around scores and traits.</span></a>
            <a class="shell-page-link" href="roadmap.html"><strong>Roadmap</strong><span>See the wider direction of the product.</span></a>
            <a class="shell-page-link" href="privacy.html"><strong>Privacy</strong><span>Understand what is stored locally and what is gated.</span></a>
            <a class="shell-page-link" href="app.html"><strong>New Scan</strong><span>Run another analysis right away.</span></a>
        `;
        appendBeforeFooter(pageNav);
    }

    function addAppSections() {
        const checks = el('section', 'shell-checklist');
        checks.innerHTML = `
            <div class="shell-check"><div class="shell-check-icon">1</div><div><strong>Hairline visible</strong><span>Keep the top of the forehead visible so the manual hairline step lands cleaner.</span></div></div>
            <div class="shell-check"><div class="shell-check-icon">2</div><div><strong>Even lighting</strong><span>Flat lighting helps structure reads stay closer to the actual face.</span></div></div>
            <div class="shell-check"><div class="shell-check-icon">3</div><div><strong>No smile</strong><span>Expression noise changes the baseline and makes a result less useful for comparison.</span></div></div>
            <div class="shell-check"><div class="shell-check-icon">4</div><div><strong>Account if needed</strong><span>Guests preview. Logged-in users keep readable results and timeline value.</span></div></div>
        `;
        insertAfterFirstMatch(['.header', '.main'], checks);

        const tabs = el('section', 'shell-tabs');
        tabs.setAttribute('data-shell-tabs', '');
        tabs.innerHTML = `
            <div class="shell-tab-list">
                <button class="shell-tab-btn" data-shell-tab="prep">Prep</button>
                <button class="shell-tab-btn" data-shell-tab="guest">Guest</button>
                <button class="shell-tab-btn" data-shell-tab="member">Member</button>
            </div>
            <div class="shell-tab-panel" data-shell-panel="prep">
                <div class="shell-panel-grid">
                    <div class="shell-rail"><strong>Best baseline</strong><p>Use one front-facing image with neutral expression, visible forehead, and no dramatic side shadow.</p></div>
                    <div class="shell-rail"><strong>Biggest throw-off</strong><p>Tight crop, smile tension, harsh shadow, and tilted phone angle all distort baseline readability.</p></div>
                </div>
            </div>
            <div class="shell-tab-panel" data-shell-panel="guest">
                <div class="shell-panel-grid">
                    <div class="shell-rail"><strong>Locked preview</strong><p>Guests still get the main reveal energy, but readable score detail stays gated.</p></div>
                    <div class="shell-rail"><strong>Clean conversion</strong><p>The shell now gives direct routes to signup, privacy notes, and the broader product pages.</p></div>
                </div>
            </div>
            <div class="shell-tab-panel" data-shell-panel="member">
                <div class="shell-panel-grid">
                    <div class="shell-rail"><strong>Readable result</strong><p>Logged-in users keep the clear score, tier, and saved history.</p></div>
                    <div class="shell-rail"><strong>Timeline value</strong><p>The scan matters more when it can later be compared against another scan in the dashboard.</p></div>
                </div>
            </div>
        `;
        appendBeforeFooter(tabs);
    }

    function addAuthSections() {
        const grid = el('section', 'shell-grid');
        grid.innerHTML = `
            <div class="shell-tile"><div class="shell-tile-kicker">Readable</div><div class="shell-tile-title">Full Score</div><div class="shell-tile-copy">Account mode keeps the readable score and unlocks dashboard history.</div></div>
            <div class="shell-tile"><div class="shell-tile-kicker">Stored</div><div class="shell-tile-title">Saved Scans</div><div class="shell-tile-copy">Each analysis can turn into a reference point instead of disappearing.</div></div>
            <div class="shell-tile"><div class="shell-tile-kicker">Expanded</div><div class="shell-tile-title">More Pages</div><div class="shell-tile-copy">Guide, playbook, privacy, and roadmap now sit around the auth flow too.</div></div>
            <div class="shell-tile"><div class="shell-tile-kicker">Shortcuts</div><div class="shell-tile-title">Quick Access</div><div class="shell-tile-copy">Dock, command palette, and keyboard routes work before and after login.</div></div>
        `;
        appendBeforeFooter(grid);
    }

    function normalizeDataAttrs() {
        document.querySelectorAll('[data-countvalue]').forEach(node => {
            node.dataset.countValue = node.getAttribute('data-countvalue');
        });
    }

    function highlightCurrentLinks() {
        document.querySelectorAll(`a[href="${FILE}"]`).forEach(link => {
            link.classList.add('is-current');
        });
    }

    function init() {
        bodyReady();
        normalizeDataAttrs();
        makeProgressBar();
        makeCursorHalo();
        makeAnnouncement();
        makeDock();
        makeBackTop();
        makeShortcutMap();
        makeAutoSections();
        applyTabs();
        applyFaqs();
        applyReveal();
        applyTilt();
        applyCounters();
        highlightCurrentLinks();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
