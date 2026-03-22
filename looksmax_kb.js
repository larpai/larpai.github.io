// @ts-nocheck
/**
 * looksmax_kb.js — Comprehensive Looksmaxxing Knowledge Base
 * Sources: looksmax.org threads, PSL community consensus, aesthetic surgery literature
 * Used by the cinematic reveal screen to show detailed, feature-specific advice.
 *
 * Structure per feature:
 *   title        — display name
 *   why          — why this feature matters for attraction (1-2 sentences)
 *   diet         — dietary/supplement interventions
 *   softmax      — array of { label, detail } non-surgical options
 *   medmax       — array of { label, detail } med spa / non-surgical medical options
 *   hardmax      — array of { label, detail } surgical options
 *   male_note    — male-specific note (optional)
 *   female_note  — female-specific note (optional)
 */

window.LOOKSMAX_KB = {

  /* ══════════════════════════════════════════════════════════════════
     SYMMETRY
  ══════════════════════════════════════════════════════════════════ */
  symmetry: {
    title: 'Facial Symmetry',
    why: 'Symmetry is the #1 subconscious signal of genetic health and developmental stability. Even small asymmetries read as stress, illness, or poor genetics. Every 0.5% above 95% bilateral match is a meaningful PSL advantage.',
    diet: [
      { label: 'Anti-inflammatory diet', detail: 'Chronic low-grade inflammation causes asymmetric tissue swelling. Cut seed oils, processed sugar, and refined carbs. Prioritise omega-3s (3–4g EPA/DHA daily from fish oil), dark leafy greens, and berries.' },
      { label: 'Zinc + Vitamin D3/K2', detail: 'Zinc (15–30mg/day) supports facial bone remodelling. D3 (5,000 IU) + K2 MK-7 (200mcg) directs calcium into bone rather than soft tissue, supporting skeletal symmetry over time.' },
      { label: 'Reduce sodium', detail: 'High sodium causes differential water retention that amplifies asymmetry. Keep under 2g/day when trying to improve facial symmetry appearance.' },
      { label: 'Magnesium glycinate', detail: '400mg before bed reduces muscle tension asymmetry from jaw clenching (bruxism) — a major driver of facial asymmetry.' },
    ],
    softmax: [
      { label: 'Sleep exclusively on your back', detail: 'Stomach/side sleeping compresses one side of the face 6–8 hours per night, year after year. A cervical pillow that keeps you supine is the highest ROI free intervention. Consistent back sleeping has visibly reduced asymmetry for many users within months.' },
      { label: 'Chew evenly — both sides', detail: 'Favouring one chewing side for years hypertrophies the masseter on that side, widening it asymmetrically. Consciously chew on the weaker side until balance is restored. Track it for 4–8 weeks.' },
      { label: 'Mewing / correct tongue posture', detail: 'Full tongue on the palate (not just tip) creates bilateral upward pressure. Asymmetric mewing is worse than not mewing — ensure equal left-right pressure. Consistent 24/7 mewing over 1–3 years has been reported to improve jaw symmetry.' },
      { label: 'Fix nasal breathing', detail: 'Mouth breathing causes asymmetric facial development. Use nasal strips at night, address deviated septum if present, breathe through nose 100% of the time.' },
      { label: 'Correct body posture', detail: 'Scoliosis and forward head posture create downstream craniofacial asymmetry. Fix anterior pelvic tilt, text neck, and shoulder imbalances — the face follows the spine.' },
      { label: 'Contouring / grooming', detail: 'Strategic contouring on the flatter/less defined side can visually equalise asymmetry instantly. Also: hairstyles with an asymmetric part draw attention away from facial asymmetry.' },
    ],
    medmax: [
      { label: 'Masseter Botox (dominant side only)', detail: 'Inject 20–30 units into the hypertrophied masseter to shrink it over 6–8 weeks, equalising jaw width. One of the highest ROI procedures for symmetry. Lasts 4–6 months, results compound with repeat treatments.' },
      { label: 'Filler to recessed side', detail: 'HA filler (0.5–1mL) strategically placed on the less-developed side (cheek, chin, jawline) to equalise bilateral volume. Temporary (12–18 months) but immediately visible.' },
      { label: 'PDO threads', detail: 'Thread lift on the ptotic (drooping) side to elevate soft tissue to match the more elevated side. Results last 12–18 months.' },
    ],
    hardmax: [
      { label: 'Rhinoplasty with septoplasty', detail: 'A deviated nasal axis is the most common driver of perceived facial asymmetry. Rhinoplasty combined with septoplasty can dramatically improve midline symmetry and is often the single highest-impact symmetry surgery.' },
      { label: 'Orthognathic surgery', detail: 'For skeletal asymmetry (jaw shifted off-midline, chin deviation). BSSO + genioplasty with repositioning is the gold standard. Most transformative for severe skeletal cases.' },
      { label: 'Genioplasty with chin centering', detail: 'Sliding genioplasty can simultaneously advance/retrude and lateralise the chin to the midline. High-precision, often combined with jaw surgery.' },
      { label: 'Zygomatic osteotomy', detail: 'For one cheekbone significantly more recessed than the other. Rarely performed but effective in severe cases.' },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════
     FACIAL THIRDS (goldenRatio)
  ══════════════════════════════════════════════════════════════════ */
  goldenRatio: {
    title: 'Facial Thirds',
    why: 'Upper (hairline→nasion), middle (nasion→subnasale), lower (subnasale→chin) should ideally be equal thirds. Deviation above 12% is clearly visible and disrupts overall facial harmony. This is one of the most fixable metrics with targeted intervention.',
    diet: [
      { label: 'Protein for tissue volume', detail: 'Getting 1.6–2g protein/kg/day maintains facial fat at a healthy level — neither too gaunt (which exaggerates thirds deviation) nor too full.' },
      { label: 'Collagen + Vitamin C', detail: '10g hydrolysed collagen + 500mg Vitamin C daily supports skin elasticity, which affects how thirds proportions look at different body fat levels.' },
    ],
    softmax: [
      { label: 'Target body fat 10–14%', detail: 'Facial fat distribution dramatically changes how thirds appear. At higher BF% the lower face bloats, distorting the lower third. Lean down to see your true thirds ratio — many people\'s thirds are better than they think when lean.' },
      { label: 'Hairstyle engineering', detail: 'Hair can visually correct thirds. Large upper third → keep hair flat/close to skull at top. Small lower third → avoid chin-length cuts that frame the lower face smaller. Long upper third with low hairline → voluminous crown adds perceived height.' },
      { label: 'Mewing for lower third', detail: 'Consistent mewing develops the lower third by encouraging mandibular forward growth. Most effective under 25 but reports of results in adults with years of consistent practice.' },
    ],
    medmax: [
      { label: 'Chin filler', detail: '0.5–1mL HA filler in the chin can add 3–6mm of vertical projection, improving a small lower third. Temporary (12 months) but allows you to see the effect before committing to surgery. Best for mild deficiency.' },
      { label: 'Lip filler (lower third)', detail: 'If the lower third is proportionally correct but looks compressed, lip filler can fill out the vermilion and improve the lower third appearance without adding actual height.' },
      { label: 'Botox for brow lift (upper third)', detail: 'If the upper third looks large due to a low brow position, 4–6 units of Botox above the lateral brow can lift it 2–4mm, reducing perceived upper third.' },
    ],
    hardmax: [
      { label: 'Sliding genioplasty', detail: 'For small lower third: advances the chin, adding 4–12mm of vertical and forward projection simultaneously. The gold standard lower face procedure — allows precise 3D repositioning. Far superior to implants for vertical corrections.' },
      { label: 'Chin implant', detail: 'For moderate lower third deficiency: silicone or Medpor implants add projection. Simpler than genioplasty but cannot add vertical height — purely horizontal.' },
      { label: 'Rhinoplasty with tip rotation', detail: 'For large middle third: rotating the nasal tip upward shortens the visual nasal height without reducing actual length. 15–20° of tip rotation can significantly reduce middle third appearance.' },
      { label: 'LeFort I + maxillary impaction', detail: 'For large middle third caused by vertical maxillary excess (VME / "gummy smile"): impaction surgery moves the maxilla superiorly by 3–6mm, compressing the middle third. Dramatic effect — only for severe cases.' },
      { label: 'Surgical hairline lowering', detail: 'For very large upper third: hair transplant into the hairline or scalp advancement surgery. Can lower the hairline 1–3cm, dramatically reducing the upper third.' },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════
     FWHR
  ══════════════════════════════════════════════════════════════════ */
  FWHR: {
    title: 'Facial Width-to-Height Ratio (FWHR)',
    why: 'FWHR is the most-discussed ratio on looksmax.org. For males: higher = more dominant, masculine, attractive (ideal 1.9–2.0). For females: lower = more feminine, oval-faced (ideal 1.55–1.75). A primary driver of first-impression ratings.',
    diet: [
      { label: 'Leaning down reveals FWHR', detail: 'Facial fat sits primarily in the cheek and jowl area, artificially increasing apparent face height. Getting lean (males 8–12%, females 14–18%) reveals your true FWHR. Most people\'s FWHR improves significantly when lean.' },
      { label: 'Mastic gum / chewing', detail: 'Chewing hard foods and mastic gum for 45–90 min/day hypertrophies the masseter muscle, adding width to the lower FWHR. Reported results within 3–6 months. Use a Falim gum or mastic gum — significantly harder than regular gum.' },
      { label: 'Testosterone support', detail: 'Natural T optimisation (zinc, D3, adequate sleep, lifting) supports masseter development and cheekbone prominence. T drives FWHR development, especially during and just after puberty.' },
    ],
    softmax: [
      { label: 'Mastic gum chewing 60–90 min/day', detail: 'Most accessible FWHR improvement. Mastic gum (Chios variety) is significantly harder than regular gum and provides real mechanical load on the masseter. Many looksmax users report visible masseter hypertrophy within 3–6 months. Don\'t overdo it — TMJ is a real risk.' },
      { label: 'Hairstyle (low FWHR)', detail: 'If FWHR is too low (long face): short sides, no volume at crown. Avoid undercuts. A mop top or curtains with side volume adds perceived width. Fluffy, textured hair at the sides helps the most.' },
      { label: 'Hairstyle (high FWHR females)', detail: 'If FWHR is too high (masculine for females): add volume at crown with layers. Avoid blunt side-sweeping that emphasises width. Side parts work better than middle parts.' },
      { label: 'Contouring (female)', detail: 'For females with high FWHR: highlight the centre of forehead and down the nose bridge, contour the sides of the face and temples. Creates a visually narrower, more oval appearance.' },
    ],
    medmax: [
      { label: 'Masseter Botox (males — low FWHR)', detail: 'Counterintuitive: if FWHR is TOO low, do NOT get masseter Botox. If FWHR is too high from masseter hypertrophy in females, 25–30 units per side reduces masseteric bulk over 6–8 weeks. Results compound with 2–3 treatments.' },
      { label: 'Zygomatic filler', detail: 'HA filler in the zygomatic arch adds bizygomatic width without surgery, directly improving FWHR for males. 1–1.5mL per side, lasts 12–18 months. One of the highest ROI non-surgical procedures for males.' },
      { label: 'Buccal fat removal (female high FWHR)', detail: 'Removing buccal fat pads reduces mid-face width, slimming the FWHR for females. Results are permanent. Most effective at BF% 18–25% — don\'t do it if already very lean.' },
    ],
    hardmax: [
      { label: 'Zygomatic implants', detail: 'Silicone or porous PE implants placed on the zygomatic arch add permanent bizygomatic width. Most effective FWHR surgery for males. Combined with brow bone augmentation = maximum masculine FWHR.' },
      { label: 'Jaw angle implants', detail: 'Widening the bigonial distance via jaw angle implants adds lower face width, contributing to FWHR. Often combined with zygomatic implants for total facial widening.' },
      { label: 'Mandibuloplasty / V-line (females)', detail: 'For high FWHR females: jaw shave reduces the lateral mandibular width and jaw angle. Combined with masseter Botox for maximum feminisation. Popular in East Asian aesthetic medicine.' },
      { label: 'Brow bone augmentation', detail: 'Adds supraorbital prominence and upper face width, contributing to FWHR. Custom PEEK or silicone. Transformative for males with flat brow bones.' },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════
     MIDFACE RATIO
  ══════════════════════════════════════════════════════════════════ */
  midfaceRatio: {
    title: 'Midface Ratio',
    why: 'IPD/midface-height ratio measures face compactness. Ideal is ~1:1. A long midface ("horse face") is one of the most penalised features on looksmax.org. A compact midface with close-set eyes at ideal spacing reads as high-status and attractive.',
    diet: [
      { label: 'Body fat optimisation', detail: 'Midface fat pads in the infraorbital and nasolabial region extend visual midface height. Getting to 10–13% BF (males) exposes the true midface ratio — many people find it significantly improves when lean.' },
    ],
    softmax: [
      { label: 'Hairstyle for long midface', detail: 'Curtain bangs or a fringe that breaks the forehead line reduces perceived vertical midface. Any hairstyle that creates volume at the forehead shortens the apparent midface.' },
      { label: 'Shorter nasal appearance (makeup)', detail: 'Highlighting the nasal tip and applying a dark line under the nose bridge can visually shorten the nose and compress the midface appearance.' },
      { label: 'Mewing (long-term)', detail: 'Proper mewing encourages maxillary retraction in the vertical plane over years, potentially reducing the horse-face appearance. Most effective in teens but some adult effects reported.' },
    ],
    medmax: [
      { label: 'Non-surgical rhinoplasty (tip rotation)', detail: 'Filler under the nasal tip rotates it upward 5–10°, shortening the visual nose height and improving midface ratio. Results immediate, lasts 9–12 months. One of the most impactful non-surgical midface improvements.' },
      { label: 'Under-eye filler', detail: 'Tear trough filler fills the infraorbital hollow, making the midface appear more compact and supported. 0.5–1mL HA. Dramatically improves perceived midface quality.' },
    ],
    hardmax: [
      { label: 'Rhinoplasty — tip rotation', detail: 'Surgical tip rotation of 15–25° is the most reliable midface ratio fix. Changes the nasal axis direction, shortening perceived nasal height. Transformative for high midface ratios.' },
      { label: 'Maxillary impaction (LeFort I)', detail: 'For severe vertical maxillary excess: the entire maxilla is moved superiorly 3–8mm. Dramatically compresses the midface. Only for cases where the midface length is genuinely skeletal.' },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════
     EYE AREA
  ══════════════════════════════════════════════════════════════════ */
  eyeArea: {
    title: 'Eye Area',
    why: 'The eyes are the primary focus point of the face. Canthal tilt, eye size, and spacing all contribute to the "hunter eye" vs "prey eye" spectrum for males, and neoteny/doe-eye appeal for females. The #1 most commented-on feature in attraction research.',
    diet: [
      { label: 'Reduce periorbital puffiness', detail: 'Sodium restriction (under 2g/day), alcohol elimination, and 2L+ water daily dramatically reduce under-eye puffiness. Many people\'s canthal tilt improves visually once puffiness is resolved.' },
      { label: 'Vitamin C (1000mg/day)', detail: 'Supports collagen synthesis in the periorbital area, reducing dark circles and skin laxity. Topical Vitamin C serum (L-ascorbic acid 10–20%, e.g. Timeless 20% CE Ferulic) is even more effective.' },
      { label: 'Omega-3 (3–4g EPA/DHA)', detail: 'Reduces periorbital inflammation and supports the lipid tear film. Dry eyes look smaller and more recessed. Omega-3s can visibly open the eyes over 8–12 weeks.' },
      { label: 'Anti-histamines + allergy control', detail: 'Chronic allergic shiners (dark circles from allergies) and puffiness tank eye area scores. If you have seasonal allergies, loratadine or fexofenadine dramatically help.' },
      { label: 'Sleep 8+ hours, elevated head', detail: 'Elevating the head 10–15° during sleep prevents gravitational lymphatic pooling under the eyes. Use an extra pillow or an adjustable wedge.' },
    ],
    softmax: [
      { label: 'Eyelid pulling / hooding reduction', detail: 'A controversial softmax: gently pulling the upper eyelid outward and upward while blinking. Anecdotally reported to reduce hooding over months. No strong scientific backing but low risk. Many on looksmax.org report real results.' },
      { label: 'Correct brow position', detail: 'A depressed or horizontally flat brow obscures the eye and reduces canthal tilt appearance. Threading/waxing the lateral brow and training it upward (tape, serums) is a key step before considering surgical options.' },
      { label: 'Under-eye care protocol', detail: 'Daily: retinol 0.025–0.05% under the eye (builds collagen), caffeine eye cream (vasoconstrictive, reduces puffiness), cold jade roller in the morning. Weekly: microneedling 0.25mm stimulates collagen in the periorbital area.' },
      { label: 'Lash growth for females', detail: 'Castor oil + rosemary oil (10 drops per 1 tbsp) nightly on lashes. A dermaroller 0.5mm twice a week on the lash line, followed by the serum, accelerates growth. Longer, darker lashes make eyes appear larger and more attractive.' },
      { label: 'Squinting / "sigma stare" for photos', detail: 'Mild squinting reduces scleral show, creates a more masculine and intense eye appearance in photos. The difference between a 7 and 8 eye area on photos is often just facial expression and intentional squinting.' },
    ],
    medmax: [
      { label: 'Botox for brow lift', detail: '4 units under the lateral brow (orbicularis) lifts the lateral brow 2–4mm, increasing apparent canthal tilt. One of the most impactful and affordable procedures. Costs ~$50–100. Lasts 3–4 months. Often called the "fox eye Botox" technique.' },
      { label: 'Tear trough filler', detail: '0.5–1mL HA filler in the tear trough supports the under-eye, reduces dark circles, and lifts the lower lid slightly. Changes eye area appearance dramatically. High skill-dependent — use an experienced injector only.' },
      { label: 'Ptosis correction (non-surgical)', detail: 'Oxymetazoline (Upneeq) eye drops temporarily lift a ptotic upper lid by 1–2mm. Prescription in some countries. Used before photos or going out — lasts 6–8 hours.' },
      { label: 'Korean Botox (intradermal) for undereye', detail: 'Micro-injections of diluted Botox into the orbicularis reduces fine lines and slightly lifts the lower lid, improving the eye shape. Popular in East Asian aesthetics.' },
    ],
    hardmax: [
      { label: 'Canthoplasty / Canthopexy', detail: 'Lateral canthopexy lifts the outer canthus 3–5°, directly improving canthal tilt. The most impactful eye surgery for males. Combined with lower blepharoplasty for maximum effect. Temporary results (2–3 years) with canthopexy; canthoplasty is more permanent.' },
      { label: 'Upper blepharoplasty', detail: 'Removes excess upper eyelid skin (hooding), directly exposing more of the iris and improving eye openness. One of the most common facial surgeries. Results permanent.' },
      { label: 'Lower blepharoplasty + fat repositioning', detail: 'Removes or repositions lower lid fat, dramatically improving under-eye appearance. Often combined with canthopexy for total eye area transformation.' },
      { label: 'Orbital rim implants', detail: 'Augments the supraorbital and infraorbital rim, creating a more hooded, deep-set eye appearance. Adds the "brow-over-eye" look that reads as very masculine and attractive. Custom PEEK implants.' },
      { label: 'Brow bone augmentation', detail: 'Adds bulk to the supraorbital torus (brow bone), creating natural hooding of the upper lid and a more masculine, hunter eye appearance. One of the most requested male procedures on PSL forums.' },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════
     ZYGOMATIC
  ══════════════════════════════════════════════════════════════════ */
  zygomatic: {
    title: 'Zygomatic / Cheekbones',
    why: 'High, prominent cheekbones are a universal attractiveness signal in both sexes. They create the ogee curve of model faces and act as a halo feature — people rate every other feature higher when cheekbones are prominent. One of the highest-leverage features to fix.',
    diet: [
      { label: 'Get lean — the #1 zygomatic trick', detail: 'Most people\'s cheekbones are already good but hidden under facial fat. Getting to 8–12% BF (males) or 14–18% (females) reveals the zygomatic arch completely. The difference between 15% and 10% BF on cheekbone appearance is dramatic.' },
      { label: 'Vitamin K2 MK-7 + D3', detail: 'K2 (200mcg) and D3 (5,000 IU) activate osteocalcin, supporting cheekbone density and definition. Best results combined with resistance training which stimulates facial bone remodelling.' },
      { label: 'Collagen + bone broth', detail: '10g hydrolysed collagen or 1–2 cups bone broth daily supports periosteal tissue quality, helping cheekbones appear more defined even at the same BF%.' },
      { label: 'Weekly dark chocolate (70%+ cacao)', detail: 'Epicatechin in dark chocolate acts as a myostatin inhibitor — supports facial muscle and bone development. 50g dark chocolate per week is the commonly cited looksmax dose.' },
    ],
    softmax: [
      { label: 'Mewing — zygomatic expansion', detail: 'The zygomatic bone is stimulated by upward tongue pressure. Proper mewing (full tongue on palate with suction) applies upward and lateral pressure that may stimulate zygomatic development. Results are slow (1–3 years) but frequently reported.' },
      { label: 'Contouring (most immediate fix)', detail: 'Contouring below the cheekbone shadow with a matte bronzer, then highlighting the apex of the cheek, creates an instant high-cheekbone illusion. The most effective and accessible cheekbone improvement. Females especially: blush slightly above the cheekbone apex.' },
      { label: 'Hairstyle for cheekbone framing', detail: 'Side-swept hair, face-framing layers, and waves all create shadows around the cheekbone that enhance their prominence. Blunt haircuts with no movement flatten cheekbones visually.' },
      { label: 'Buccal fat: don\'t do it lean', detail: 'Many people consider buccal fat removal before losing weight. At 10–12% BF, buccal fat naturally retracts, revealing cheekbones. Buccal removal at high BF is wasted — lean down first, then reassess.' },
    ],
    medmax: [
      { label: 'HA cheek filler (zygomatic zone)', detail: '1–2mL HA filler placed on the zygomatic arch and anterior cheek creates immediate cheekbone prominence. Lasts 12–18 months. One of the most popular and effective non-surgical procedures. Use a skilled injector — wrong placement causes the "pillow face" look.' },
      { label: 'CaHA (Radiesse) for cheeks', detail: 'Calcium hydroxyapatite is a denser filler that stimulates collagen. Lasts 18–24 months. Better for creating structural lift vs HA which is better for volume. Often preferred for zygomatic augmentation.' },
      { label: 'Buccal fat removal', detail: 'Permanent removal of buccal fat pads reveals the zygomatic arch shadow. Most effective at BF% 18–25% — already lean people may look skeletonised. Dramatic, immediate effect.' },
      { label: 'LIPUS (Low-Intensity Pulsed Ultrasound)', detail: 'Medical-grade ultrasound device that stimulates facial bone growth. Popular in looksmax community for zygomatic bone development. Expensive ($3,000–5,000) but non-invasive. Limited but growing evidence base.' },
    ],
    hardmax: [
      { label: 'Zygomatic implants (silicone/porous PE)', detail: 'The gold standard zygomatic augmentation. Custom-fitted implants placed directly on the zygomatic arch create permanent high cheekbones. Dramatic, natural-looking results. The single most impactful procedure for the zygomatic score. 90-minute surgery.' },
      { label: 'Fat grafting to cheeks', detail: 'Autologous fat transfer from another area of the body. Results are natural and permanent, though ~30% of fat resorbs. Requires two surgeries (harvest + inject). Good alternative for those wanting to avoid synthetic implants.' },
      { label: 'LeFort III / zygomatic advancement', detail: 'Skeletal advancement of the entire zygomatic arch forward. Reserved for cases of significant midface retrusion. Most dramatic possible zygomatic surgery.' },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════
     JAWLINE
  ══════════════════════════════════════════════════════════════════ */
  jawline: {
    title: 'Jawline',
    why: 'The jawline is the #1 masculine feature. A sharp, defined gonial angle and strong mandibular body are the centrepiece of male facial aesthetics. For females, a soft V-shaped taper is ideal. The jaw is the most requested facial surgery topic across looksmax.org.',
    diet: [
      { label: 'Get lean to 8–12% BF (males)', detail: 'The single highest-impact jawline intervention. At 12% BF most jawlines are hidden. At 8–10%, even mediocre bone structure shows as defined. The jaw/face ratio measurement improves visually at lower BF%. Caloric deficit of 500kcal/day + cardio gets you there in 3–4 months.' },
      { label: 'Mastic gum / Falim gum chewing', detail: 'Mastic gum (Chios) is 10x harder than regular gum. 60–90 minutes daily of hard chewing creates genuine masseter hypertrophy, widening the jaw and sharpening the jaw angle definition. Takes 3–6 months. Looksmax.org consensus: this works, but TMJ risk is real — don\'t overdo it.' },
      { label: 'Protein 1.8–2.2g/kg', detail: 'The masseter is a muscle. Adequate protein intake (especially leucine-rich sources: chicken, eggs, whey) maximises masseter hypertrophy from chewing. Combine with chewing for best results.' },
      { label: 'Zinc + Boron for testosterone', detail: 'Zinc (30mg), Boron (10mg), D3 (5,000 IU), and adequate sleep optimise endogenous testosterone, which drives jaw development. Suboptimal T levels reduce masseteric and mandibular development.' },
      { label: 'Anti-inflammatory diet', detail: 'Jaw puffiness from chronic inflammation can obscure the jaw angle. Eliminating processed foods, seed oils, and alcohol for 4–6 weeks will reveal sharper jaw definition in most people.' },
    ],
    softmax: [
      { label: 'Mewing — mandibular forward growth', detail: 'Full tongue posture creates posterior mandibular rotation, potentially growing the ramus (jaw height) over years. Most effective under 25. Adults report slower but real changes. Requires extreme consistency — 24/7, not just when you remember.' },
      { label: 'Jaw exercises', detail: 'Beyond chewing: chin tucks (bringing chin backward while keeping head level) strengthen the deep neck flexors and improve jawline definition. 3 sets of 15 reps daily. Also: tongue pushups (pressing tongue to palate with force) develop the suprahyoid muscles.' },
      { label: 'Neck training', detail: 'A thick, strong neck frames the jawline. Neck curls, neck extensions, and neck side-bends with light weight. A strong neck makes even an average jaw look significantly better. The most overlooked facial aesthetic improvement.' },
      { label: 'Beard fraud (males)', detail: 'A well-shaped beard (1–2 week stubble or a defined short beard) can completely transform a weak jawline. The beard adds perceived volume at the jaw angle and chin. One of the highest ROI softmaxes for males. Groom neckline precisely.' },
    ],
    medmax: [
      { label: 'Masseter Botox for males', detail: 'For males: DO NOT get masseter Botox unless you have excessive masseteric hypertrophy making your jaw look rounded. For most males, masseter Botox reduces jaw definition. It is primarily for females wanting a softer V-line.' },
      { label: 'Jaw angle filler (HA/CaHA)', detail: 'Filler placed at the mandibular angle can add width and definition. 1–2mL per side. An excellent way to test the look before surgery. Lasts 12–18 months. Very technique-sensitive — a skilled injector is essential.' },
      { label: 'Chin filler', detail: '0.5–1mL HA at the chin tip extends the jawline projection. Immediate visible improvement in gonial-to-chin visual flow. The most commonly placed facial filler.' },
    ],
    hardmax: [
      { label: 'Custom wrap-around jaw implant (PPE)', detail: 'The gold standard for total jawline transformation. A custom-fitted porous polyethylene implant wraps around the entire mandible, adding angle definition, width, and chin projection simultaneously. The highest ROI male facial surgery. Life-changing results.' },
      { label: 'Mandibular angle implants', detail: 'Isolated silicone implants at the gonion (jaw angle). Ideal for those with good jaw width but flat/rounded angles. Creates the "corner" of the jaw that defines an angular jawline.' },
      { label: 'BSSO (Bilateral Sagittal Split Osteotomy)', detail: 'Moves the entire mandible forward for cases of mandibular retrusion (receding jaw). Structural fix — the most impactful jaw surgery for faces where the entire mandible is set too far back.' },
      { label: 'Sliding genioplasty', detail: 'The chin specifically advanced, set back, or widened. The most precise lower face surgery. Can advance, lateralise, and change the vertical height of the chin in a single procedure.' },
    ],
    male_note: 'Males should never get masseter Botox unless they have extreme masseteric hypertrophy. A bigger jaw muscle = better for males. Sharpness, not reduction, is the goal.',
    female_note: 'For females, the goal is a SOFT jaw — gonial angle 125–138°. Masseter Botox (20–25u/side) is the #1 female jaw procedure. V-line surgery is popular in Korea for a tapered, feminine result.',
  },

  /* ══════════════════════════════════════════════════════════════════
     BIZYGO/BIGONIAL
  ══════════════════════════════════════════════════════════════════ */
  bizygoBigonial: {
    title: 'Bizygo/Bigonial Ratio',
    why: 'Cheekbones significantly wider than the jaw (ratio > 1.35 for males, > 1.45 for females) creates the ideal facial taper — the inverse triangle / heart shape. Wide jaw vs narrow cheekbones reads as boxy and masculine in females, or underdeveloped in males.',
    diet: [
      { label: 'Lean body fat', detail: 'Getting lean reduces buccal fat, masseter volume, and jowl fat — all of which widen the lower face relative to the cheekbones, reducing the ratio. Cutting to 10% BF is the fastest natural bizygo/bigonial improvement.' },
    ],
    softmax: [
      { label: 'Hairstyle to widen upper face', detail: 'Volume at the temples and cheekbone level (side-swept waves, curtain hair with fullness at the sides) widens the perceived zygomatic width relative to the jaw.' },
      { label: 'Contouring', detail: 'Contour below the cheekbone and along the jawline to visually narrow the jaw while highlighting the cheekbones. One of the most impactful contouring techniques.' },
    ],
    medmax: [
      { label: 'Masseter Botox (wide jaw, low ratio)', detail: '20–30 units per side reduces masseteric bulk over 6–8 weeks, narrowing the bigonial width and improving the ratio. Results compound with 2–3 treatment cycles. The most effective non-surgical bizygo/bigonial fix.' },
      { label: 'Cheek filler (low ratio, narrow cheekbones)', detail: 'Adding zygomatic filler increases the numerator. 1–2mL per side. Combined with masseter Botox for a double-attack on the ratio.' },
    ],
    hardmax: [
      { label: 'Zygomatic implants + masseter Botox', detail: 'The combination that most dramatically shifts this ratio. Implants increase bizygomatic width, Botox reduces bigonial width. The full transformation often achieved with this combination alone.' },
      { label: 'Jaw shave (mandibuloplasty)', detail: 'Surgical reduction of the lateral mandibular body. Shaving the outer cortex of the jaw bone by 3–5mm on each side reduces bigonial width permanently. Popular in East Asian clinics (V-line surgery).' },
    ],
    female_note: 'Heart-shaped face (bizygo >> bigonial) is the gold standard female face shape. Ratio of 1.45–1.60 is the ideal. Masseter Botox is the most impactful female procedure for improving this metric.',
  },

  /* ══════════════════════════════════════════════════════════════════
     NOSE
  ══════════════════════════════════════════════════════════════════ */
  nose: {
    title: 'Nose',
    why: 'The nose sits at the exact centre of the face. Its width, projection, tip shape, and symmetry affect every surrounding feature. A wide or bulbous nose is one of the most-complained-about features on looksmax.org — and one of the most fixable.',
    diet: [
      { label: 'Lean down — most underrated nose softmax', detail: 'The nose has subcutaneous fat deposits, especially at the tip and alae. Getting to 10% BF shrinks these deposits. Multiple looksmax users have reported a noticeably smaller nose tip simply from cutting weight. "Losing fat will always help facially." (looksmax.org)' },
      { label: 'Anti-inflammatory protocol', detail: 'Chronic nasal inflammation makes the nose appear larger and more bulbous. Eliminating seed oils, processed sugar, dairy (if intolerant), and alcohol for 4–6 weeks can visibly reduce nasal swelling. Many users with "perma-red noses" see dramatic improvement from dietary anti-inflammation alone.' },
      { label: 'Reduce sodium intake', detail: 'High sodium causes fluid retention in facial soft tissue including the nose. Keeping sodium under 1.5g/day for 2 weeks will often visibly reduce nose size for people with high baseline sodium intake.' },
      { label: 'Vitamin C + Zinc for skin quality', detail: 'Better skin quality reduces the sebaceous gland size (enlarged pores on the nose make it look larger). Vitamin C 1000mg + Zinc 15mg daily supports skin clarity and pore minimisation.' },
    ],
    softmax: [
      { label: 'Skincare — pore reduction', detail: 'Enlarged sebaceous filaments and pores make the nose look larger and oilier. Daily: salicylic acid 2% cleanser. Weekly: charcoal pore strip or clay mask. Proper cleansing can visibly reduce nose size within weeks.' },
      { label: 'Tretinoin (retinol Rx)', detail: 'Tretinoin/retinol shrinks sebaceous glands and reduces sebaceous filament size. Essentially a weaker oral Accutane effect applied topically. "Accutane nose job" is a real phenomenon — many users report significant nose slimming from Accutane/tret. Apply 0.025–0.05% to nose 3x/week.' },
      { label: '1% Hydrocortisone cream', detail: 'Apply 2 pea-sized drops to nasal cartilage (not the bridge) once daily for 2 weeks, then as needed before going out. Thins skin and reduces subcutaneous fat via skin atrophy. Some users report 0.5cm reduction in 2 weeks. Use with Ashwagandha (500–800mg) to counter cortisol effects. Do not use long-term — cycling is essential. Note: risks include skin thinning and rosacea-like eruptions. Use at your own risk.' },
      { label: 'Nasal washing (saline)', detail: 'Daily nasal irrigation reduces internal mucus/swelling that increases apparent nasal protrusion. Squeeze bottle with saline solution, one nostril in and out the other. Reduces nasal "bloat" and is excellent for deviated septum management.' },
      { label: 'Nose exercises', detail: 'Pinching the nose bridge daily while breathing out forcefully. Anecdotally reported to reduce nasal width slightly over months. Not scientifically validated but zero risk and free. Many looksmax users include this in their routine.' },
      { label: 'Contouring (most immediate)', detail: 'Narrow the nose visually by applying a matte shadow on both sides of the nose bridge. Highlight down the centre. This is the most impactful nose improvement available without any investment — transformative in the right hands.' },
    ],
    medmax: [
      { label: 'Non-surgical rhinoplasty (filler)', detail: 'HA filler can camouflage bumps, lift a drooping tip, and straighten the nose visually. 0.3–0.5mL total. Cannot reduce size — only reshape. The dorsal hump illusion: filler above and below a bump makes it disappear. Lasts 9–12 months. Risk: vascular compromise with inexperienced injectors.' },
      { label: 'Botox tip depressor (depressor septi)', detail: '2–4 units in the depressor septi nasi muscle prevents the tip from drooping when smiling. Makes the nose look shorter and more upturned in dynamic expressions. Cheap ($40–60), very effective.' },
      { label: 'Accutane (isotretinoin)', detail: 'Prescription oral retinoid. Dramatically shrinks sebaceous glands — the "Accutane nose job" effect is real and well-documented. Reduces nose thickness and oiliness. Requires dermatologist prescription. 20–40mg daily for 5–6 months. Side effects include dry skin, lips, and temporary hair thinning.' },
      { label: 'Lipolab / fat dissolving injections (nose)', detail: 'Deoxycholic acid or phosphatidylcholine injected into nasal fat deposits. Emerging nose-slimming technique from East Asian clinics. High-risk area — only from experienced practitioners. Can significantly reduce tip bulbosity.' },
    ],
    hardmax: [
      { label: 'Rhinoplasty (open or closed)', detail: 'The definitive nose fix. Can address width, projection, dorsal hump, tip rotation, deviated septum, and asymmetry simultaneously. Most common facial surgery worldwide. Open rhinoplasty (scar under nose) gives the surgeon more control. Results permanent.' },
      { label: 'Alarplasty (alar base reduction)', detail: 'Surgical reduction of the nostril width by removing a small wedge of skin at the alar base. The most direct fix for a wide nose base. Can be done under local anaesthetic, no general anaesthesia needed. Results immediate and permanent.' },
      { label: 'Septoplasty', detail: 'Corrects a deviated nasal septum, improving both symmetry and breathing. Often combined with rhinoplasty (septorhinoplasty). Improves nasal tip centrality score.' },
      { label: 'Tip-only rhinoplasty', detail: 'Targeted surgery on only the nasal tip (reducing bulbosity, rotating upward, refining). Less invasive than full rhinoplasty, faster recovery (~2 weeks), lower cost. Ideal if the nose bridge is fine but the tip is the only issue.' },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════
     LIPS
  ══════════════════════════════════════════════════════════════════ */
  lips: {
    title: 'Lips',
    why: 'Lips are a primary femininity and youth signal. For females, fuller lips with a defined cupid\'s bow are one of the most attractive features. For males, lips should be well-defined but not overly plump — the philtrum-to-chin relationship matters more than raw volume.',
    diet: [
      { label: 'Hydration — lips depend on it', detail: 'Chronically dehydrated lips appear thinner, more lined, and less defined. 2.5–3L water daily, plus hyaluronic acid supplementation (150–200mg/day) which binds water in skin and lip tissue.' },
      { label: 'Vitamin E + collagen for lip plumpness', detail: 'Vitamin E (400 IU) and 10g hydrolysed collagen daily maintain lip tissue volume and reduce lip thinning with age. The collagen in lips is type IV — specifically supported by glycine-rich collagen supplements.' },
      { label: 'Omega-3 for lip definition', detail: 'Omega-3 fatty acids maintain the phospholipid structure of lip skin, keeping lips supple and defined rather than dry and flat. 3–4g EPA/DHA daily from fish oil.' },
    ],
    softmax: [
      { label: 'Toothbrush lip exfoliation', detail: 'Brushing lips with a wet toothbrush for 2 minutes morning and night removes dead skin and stimulates blood flow — immediately makes lips look fuller and more defined. This is the most recommended free lip softmax on looksmax.org.' },
      { label: 'Vaseline / lip balm protocol', detail: 'Apply Vaseline every night as an occlusive to lock in moisture. In the morning: exfoliate, apply a hydrating lip serum (hyaluronic acid), then a light balm. Consistently plump, smooth lips result within 1–2 weeks.' },
      { label: 'Volufiline serum', detail: 'Volufiline (sarsasapogenin) is a plant extract that stimulates adipocyte development in tissue, adding small amounts of volume over weeks. Apply directly to lips in straight lines, slightly more on the lower lip. Some looksmax users report visible increase in lip fullness. Pair with Vaseline occlusion after application. Note: some report lip protrusion on profile — test carefully.' },
      { label: 'Dermaroller 0.5mm on lips', detail: 'Microneedling the lip with a 0.5mm dermaroller every 2 weeks stimulates collagen synthesis. Apply Volufiline + Matrixyl serum immediately after. Looksmax community reports real size increase from consistent use.' },
      { label: 'Lip liner to define cupid\'s bow (females)', detail: 'The most transformative makeup technique for lips. Lining just outside the natural lip edge (especially the cupid\'s bow and lower lip midpoint) with a close-matched liner creates the appearance of fuller, better-defined lips. 5-minute investment, dramatic effect.' },
    ],
    medmax: [
      { label: 'HA lip filler (most effective non-surgical)', detail: 'Hyaluronic acid filler (Restylane Kysse, Juvederm Volbella) is the most commonly performed aesthetic procedure worldwide. For females: 0.5–1mL upper + 0.5mL lower for natural results. For males: 0.3–0.5mL total for definition, not volume. Lasts 9–12 months. Key: the ratio matters more than the amount — improve the L/U ratio, not just pump volume.' },
      { label: 'Lip flip (Botox)', detail: '2–4 units of Botox into the orbicularis oris above the upper lip causes the upper lip to roll slightly outward ("flip"), increasing upper lip show without filler. $30–50, lasts 8–10 weeks. Excellent for thin upper lips.' },
      { label: 'Russian lip technique', detail: 'Filler placed vertically into the lip body (vs horizontally) creates height and projection without widening. Produces the defined, projecting pout associated with model lips. More expensive but better shape.' },
    ],
    hardmax: [
      { label: 'Lip lift (most transformative lip surgery)', detail: 'Removes 5–8mm of skin between the nose base and upper lip, permanently shortening the philtrum and increasing upper lip show. Dramatically improves the upper-to-lower lip ratio. The most impactful lip surgery — results are permanent. Often called the best ROI lip procedure. Small scar under the nose, well-hidden.' },
      { label: 'Corner lip lift', detail: 'Removes small triangles of skin at the lip corners to turn downturned corners upward. Creates a resting pleasant expression. Small scar at each corner, well-healed.' },
      { label: 'V-Y plasty / lip augmentation surgery', detail: 'Internal surgical augmentation of lip volume using the patient\'s own tissue. Permanent, natural feel. For patients wanting permanent volume without implants.' },
    ],
    female_note: 'For females: focus on upper lip fullness and a defined cupid\'s bow. The ideal L/U ratio for females is ~1.4–1.6. A lip lift combined with 0.5mL upper lip filler is the gold standard "model lip" combination.',
    male_note: 'For males: the goal is definition, not volume. A well-defined philtrum column and lip border matters more than size. Lip filler should be subtle (0.3mL max) to avoid a feminising appearance.',
  },

  /* ══════════════════════════════════════════════════════════════════
     MAXILLA
  ══════════════════════════════════════════════════════════════════ */
  maxilla: {
    title: 'Midface / Maxilla',
    why: 'The maxilla is the architectural centrepiece of the face. Forward maxillary projection lifts the cheeks, supports the under-eye, defines the nasolabial angle, and prevents the hollow, flat look of maxillary retrusion. "Forward maxilla = model midface." — PSL community.',
    diet: [
      { label: 'Nose breathing — most important', detail: 'Mouth breathing causes the maxilla to develop downward and backward instead of forward (hyperdivergent growth pattern). Nose breathing is the single most important maxillary development habit. If you have nasal blockage (polyps, deviated septum), address it surgically.' },
      { label: 'Vitamin K2 MK-7 (200mcg) + D3 (5,000 IU)', detail: 'K2 activates matrix Gla protein which directs calcium into the maxillary bone matrix rather than soft tissue. D3 increases calcium absorption. This stack is the looksmax community\'s top bone development supplement. Start early — most effective pre-25.' },
      { label: 'Mastic gum + hard food chewing', detail: 'Hard chewing stimulates maxillary bone through Wolff\'s Law — bones respond to mechanical load. Eating hard foods (tough meats, carrots, mastic gum) applies vertical compressive load through the maxilla, stimulating remodelling.' },
      { label: 'MSE (Palate Expander)', detail: 'Not exactly diet, but the most effective maxillary intervention: a Maxillary Skeletal Expander (MSE) applies lateral force to the maxillary suture, widening the palate. Most effective under 25 but works in adults too. Changes the entire midface structure. Often listed as the #1 looksmax procedure for maxilla improvement.' },
    ],
    softmax: [
      { label: 'Mewing — full tongue posture 24/7', detail: 'Entire tongue on palate (not just tip), with a suction hold. Creates upward and forward pressure on the maxilla via the palatine bones. 24/7 consistency is required — even one day off breaks the constant remodelling stimulus. Adults report slower results but real changes over 2–3 years.' },
      { label: 'Thumb pulling', detail: 'Both thumbs in the mouth, applying outward pressure to the upper palate for 10–15 minutes daily. Controversial — many claim it works, some call it cope. The looksmax thread author claims 2 months of this expanded their maxilla visibly. Low risk, free. Try it — you have nothing to lose.' },
      { label: 'Chin tucks', detail: 'Pulling the chin backward while keeping the head level. Stretches the platysma and stimulates the anterior mandible/maxillary junction. 3 sets of 15 reps daily. Helps with the vertical maxillary appearance.' },
      { label: 'Fix swallowing pattern', detail: 'Tongue-thrusting swallowing (tongue pushes forward against teeth) applies backward pressure on the maxilla, counteracting mewing. Correct tongue swallowing: tongue pushes UP against palate, not forward. This is called a "correct swallow pattern."' },
    ],
    medmax: [
      { label: 'Cheek filler — midface zone', detail: 'The most popular female filler placement. 1–2mL in the zygomatic/anterior cheek (Juvederm Voluma, Radiesse) immediately creates the "forward maxilla" look — lifted cheeks, supported under-eye. The most impactful midface non-surgical procedure. Lasts 18–24 months.' },
      { label: 'Tear trough filler', detail: '0.5–1mL HA filler in the tear trough corrects the infraorbital hollow — the most visible sign of maxillary retrusion. Immediately improves the under-eye dark circle appearance and midface quality.' },
      { label: 'Volufiline under-eye (experimental)', detail: 'Some looksmax users apply Volufiline to the infraorbital region to "replace" the missing fat/bone support. Experimental, limited evidence, but low risk.' },
    ],
    hardmax: [
      { label: 'LeFort I maxillary advancement', detail: 'The gold standard structural midface fix. The entire maxilla is surgically moved forward (and sometimes upward) by 4–12mm. Creates dramatic improvement in midface profile, under-eye support, and cheekbone definition. 2–3 week recovery. Life-changing for maxillary retrusion cases.' },
      { label: 'BiMax (LeFort I + BSSO)', detail: 'Both jaws moved simultaneously. Advances the midface and mandible forward for total facial structure improvement. The most transformative facial surgery available. Reserved for significant maxillomandibular retrusion.' },
      { label: 'Maxillary implants', detail: 'Custom implants placed on the anterior maxilla (under-cheek area) to simulate forward projection. Alternative to LeFort I for those who want structural improvement without jaw surgery.' },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════
     GONION
  ══════════════════════════════════════════════════════════════════ */
  gonion: {
    title: 'Gonion / Jaw Angles',
    why: 'Visible, sharp jaw angles (gonion) below the mouth line are one of the most attractive male features. Sharp gonial definition separates the PSL 7 jaw from the PSL 8+ jaw. For females, a smooth rounded gonion is more attractive.',
    diet: [
      { label: 'Get lean', detail: 'Jaw fat at the gonion directly blurs angle definition. 10% BF for males is where the jaw angle starts becoming visible. 8% is where it becomes sharp. This is the #1 gonion improvement.' },
      { label: 'Mastic gum for masseter definition', detail: 'Masseter hypertrophy from hard chewing fills in the area directly above the gonion, creating a visible "corner" at the jaw angle even without perfect skeletal gonion definition.' },
    ],
    softmax: [
      { label: 'Neck development', detail: 'A thick neck + defined jaw angle combination reads as extremely masculine. Neck training (harness neck curls, plate neck curls) at 3x/week builds the sternocleidomastoid and other neck muscles, framing and emphasising the jaw angle.' },
      { label: 'Beard at jaw angle', detail: 'Stubble that connects across the jaw angle creates a visual jaw angle shadow even without bony definition. A sharp beard neckline just below the jaw angle maximises this effect.' },
    ],
    medmax: [
      { label: 'Jaw angle filler', detail: 'HA or CaHA filler at the mandibular angle adds structural definition. 0.5–1mL per side. An excellent test before committing to implants. Lasts 12–18 months.' },
    ],
    hardmax: [
      { label: 'Mandibular angle implants', detail: 'Silicone or Medpor implants placed at the gonion. Creates permanent, defined jaw angles. The most targeted jaw surgery for underdeveloped angles. Can be combined with a chin implant for total jaw transformation.' },
      { label: 'Gonial angle osteotomy', detail: 'The gonion itself is surgically reshaped or repositioned. More complex than implants but addresses the skeletal angle directly. Used when the existing bone is rounded or soft.' },
    ],
    female_note: 'For females, sharp jaw angles (gonion > 80% of bizygomatic width) read as masculine. Masseter Botox is the primary gonion-softening procedure. V-line jaw surgery for extreme cases.',
  },

  /* ══════════════════════════════════════════════════════════════════
     MANDIBLE
  ══════════════════════════════════════════════════════════════════ */
  mandible: {
    title: 'Mandible Depth',
    why: 'Mandibular depth (p[4]→p[12]) relative to face width measures how far forward and downward the lower jaw body extends. A deep, forward mandible creates the structural foundation for a sharp jawline. Mandibular retrusion is the most common jaw deficiency.',
    diet: [
      { label: 'Mewing and hard chewing', detail: 'Forward mandibular growth is stimulated by functional load (chewing) and resting tongue posture. The mandibular condyle responds to forward tongue pressure and masticatory load by depositing bone at the condylar head, advancing the mandible over years.' },
    ],
    softmax: [
      { label: 'Jaw jutting (tongue-to-roof posture)', detail: 'Jutting the jaw slightly forward during rest (not forced — just placing the lower teeth slightly forward) stimulates anterior mandibular growth over time. Controversial but reported by many. Essentially a relaxed Class I bite position.' },
    ],
    medmax: [
      { label: 'Chin filler for mandibular projection', detail: 'HA filler at the chin tip simulates mandibular projection. 0.5–1mL. The most common facial filler procedure. Transforms the jawline appearance immediately.' },
    ],
    hardmax: [
      { label: 'BSSO mandibular advancement', detail: 'The entire mandible is moved forward 4–12mm. Transforms a receding jawline into a projecting one. Life-changing for mandibular retrusion. Combined with LeFort I for BiMax.' },
      { label: 'Chin implant / genioplasty', detail: 'Targeted advancement of the chin specifically. Genioplasty (sliding) is more precise — chin can be moved in 3D. Implant is simpler and less invasive. Both are excellent options for mild-moderate mandibular deficiency.' },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════
     TEMPLES
  ══════════════════════════════════════════════════════════════════ */
  temples: {
    title: 'Temples',
    why: 'Full temporal projection frames the face, prevents the "skull-like" hollow appearance, and is strongly associated with youth and health. Temple hollowing is a primary aging/stress signal. Often overlooked in looksmax discussions but heavily impactful on overall face frame.',
    diet: [
      { label: 'Don\'t over-diet', detail: 'Temple fat is lost early and rapidly when cutting. Males below 7% BF often develop hollow temples regardless of bone structure. Keep BF at 9–12% for ideal temple fullness. Face fat at healthy levels fills the temporal fossa.' },
      { label: 'Omega-3 + Vitamin E', detail: 'These maintain facial fat distribution quality. Essential fatty acid deficiency accelerates facial fat atrophy including the temporal region.' },
    ],
    softmax: [
      { label: 'Hairstyle to camouflage', detail: 'Side-swept hair, longer sides, textured cuts, and waves all add apparent temporal fullness. A buzzcut with hollow temples can drop a rating significantly — this is one of the strongest haircut effects on facial aesthetics.' },
      { label: 'Temporal muscle development', detail: 'The temporalis muscle fills the temporal fossa. Chewing hard foods and wide jaw movements develop this muscle. Some users report visible temporal filling from consistent mastic gum use.' },
    ],
    medmax: [
      { label: 'Temple filler (most effective non-surgical fix)', detail: 'HA filler (Juvederm Voluma, Sculptra) placed in the temporal fossa directly. 1–2mL per side. Immediate, dramatic result. Often transforms the overall face frame. Lasts 12–24 months depending on product. One of the most underrated filler placements.' },
      { label: 'Sculptra (poly-L-lactic acid)', detail: 'Stimulates collagen synthesis in the temporal region. Results build gradually over 3–6 months but last 2+ years. 2–3 vials per treatment session. Better for gradual, longer-lasting results.' },
    ],
    hardmax: [
      { label: 'Autologous fat grafting', detail: 'Fat harvested from another area (abdomen, thighs) and injected into the temporal fossa. Permanent results, natural feel. 30–40% of fat resorbs over first year, then stable. The gold standard for permanent temple restoration.' },
      { label: 'Temporal implants', detail: 'Silicone implants in the temporal fossa. Permanent, no resorption. Less commonly performed than fat grafting but reliable results.' },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════
     EYEBROWS
  ══════════════════════════════════════════════════════════════════ */
  eyebrows: {
    title: 'Eyebrows',
    why: 'Eyebrows frame the eye area and strongly signal sexual dimorphism. Males: low, thick, flat brows signal high testosterone and dominance. Females: high, arched, defined brows signal femininity and expressiveness. Brow shape is one of the most transformation-accessible facial features.',
    diet: [
      { label: 'Castor + Rosemary oil serum', detail: 'DIY formula: 1 tbsp castor oil + 10 drops rosemary oil + 2 vitamin E capsules. Apply nightly to brow hairs. Castor oil (ricinoleic acid) and rosemary oil (ursolic acid) both stimulate hair follicle growth. Consistent 8–12 week use reportedly produces visible density increases.' },
      { label: 'Biotin + Iron + Zinc', detail: 'The brow hair follicle trifecta. Biotin (5,000mcg), Iron (if deficient — check ferritin levels), and Zinc (15–30mg) are the primary nutritional deficiencies that cause sparse, thin brows. Brow growth responds within 8–12 weeks of supplementation if deficient.' },
    ],
    softmax: [
      { label: 'Dermaroller 1.5mm (192 titanium needles) + serum', detail: 'Microneedle the brow area twice a week with a 0.5mm–1mm roller. Apply the castor/rosemary/Vitamin E serum immediately after. The microneedling creates controlled micro-trauma that dramatically amplifies serum penetration. One of the most effective brow density improvements available without medication.' },
      { label: 'Brow grooming — shape matters more than size', detail: 'Males: let brows grow thick and fill in the medial and lower edge (not upper). A thick inner brow tapers naturally outward. Never over-pluck. Females: thread for clean arch definition. The tail of the brow should be precisely shaped — a well-defined tail changes the entire eye shape.' },
      { label: 'Dye dark eyebrows (if naturally light)', detail: 'Light or sparse brows almost universally benefit from darkening with a tinted brow gel or brow pencil. Dark, defined brows frame the face and make features appear sharper and more intentional.' },
      { label: 'Brow lamination', detail: 'A professional treatment that straightens and sets brow hairs in an upward direction, creating a fluffy, fuller appearance. Lasts 6–8 weeks. Excellent for sparse or downward-growing brows. No downtime, affordable ($50–80).' },
    ],
    medmax: [
      { label: 'Microblading / powder brows', detail: 'Semi-permanent tattooing of individual hair strokes (microblading) or a filled powder look. Lasts 12–24 months. Transforms sparse or undefined brows immediately. For females: the arch shape and tail direction locked in here defines the eye area permanently. Choose your artist extremely carefully — brow shape is difficult to correct if done wrong.' },
      { label: 'Botox for brow arch (females)', detail: '2–4 units under the lateral brow lifts the brow tail 2–4mm, creating a higher arch. Combined with microblading for maximal female brow enhancement. The "Botox brow lift" is one of the most popular anti-aging injections.' },
      { label: 'Brow Botox for lowering (males)', detail: 'Looksmax: males want LOW brows. Botox ABOVE the medial brow (frontalis) can push the brow down 1–2mm for a more hooded, aggressive appearance. Technique-sensitive — requires an experienced injector.' },
    ],
    hardmax: [
      { label: 'Brow transplant', detail: 'Hair follicles from the scalp transplanted into the brow area. Permanent density increase. Excellent for people with naturally sparse or over-plucked brows. Takes 12 months for full results.' },
      { label: 'Surgical brow lowering (males)', detail: 'For males with a naturally high brow position (large forehead): direct brow lowering surgery or hairline lowering brings the brow down to the ideal position. Transformative for the overall eye area appearance.' },
      { label: 'Brow bone augmentation (males)', detail: 'Adding volume to the supraorbital rim physically pushes the brow lower. One of the defining features of a masculine face. Custom PEEK or silicone. Often the most transformative single male facial surgery.' },
    ],
    male_note: 'Males want LOW, THICK, FLAT brows. Never arch male brows — it reads as feminine. Fill in the bottom edge of the brow to lower it visually. Avoid threading that raises the tail.',
    female_note: 'Females want HIGH, ARCHED brows with a clean tail. The brow arch should peak at the lateral limbus (outer edge of iris). Microblading locks in the perfect arch permanently.',
  },

  /* ══════════════════════════════════════════════════════════════════
     EME ANGLE
  ══════════════════════════════════════════════════════════════════ */
  EMEangle: {
    title: 'EME Angle',
    why: 'The Eye-Mouth-Eye angle measures face compactness. Ideal is 47–50° for males, 48–52° for females. Too wide = long face or wide-set eyes. Too narrow = very round/compact face. A primary looksmax.org indicator of overall facial structure quality.',
    diet: [
      { label: 'Body fat for face length', detail: 'The EME angle is partly driven by facial height (longer face = wider EME). Getting lean tightens the facial proportions and slightly reduces EME angle. However, this is primarily a skeletal feature.' },
    ],
    softmax: [
      { label: 'Hairstyle for wide EME', detail: 'If EME > 52° (long face or wide eyes): volumise at the sides (not crown), avoid centre parts, use curtain hair or waves with side volume to shorten perceived face length.' },
      { label: 'Hairstyle for narrow EME', detail: 'If EME < 46° (compact/round face): add height at the crown, avoid side volume. French crop, textured quiff, or any style with vertical emphasis.' },
    ],
    medmax: [
      { label: 'Chin filler for narrow EME', detail: 'Lengthening the lower face with chin filler increases the EME angle. Useful for very compact/round faces where a slightly longer lower face would improve proportions.' },
    ],
    hardmax: [
      { label: 'Chin implant / genioplasty', detail: 'For narrow EME: adding chin projection increases the apparent face length and EME. The most direct structural EME improvement for short-faced individuals.' },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════
     FACIAL INDEX
  ══════════════════════════════════════════════════════════════════ */
  facialIndex: {
    title: 'Facial Index',
    why: 'Face height divided by face width. Ideal is 1.25–1.45 (oval). Too low (<1.2) = round/wide face (juvenile). Too high (>1.55) = long narrow face (horse-face). Facial index is influenced by both skeletal structure and body composition.',
    diet: [
      { label: 'BF% for facial index', detail: 'A wide face (low index) often has excess buccal fat, cheek fat, and jowl fat widening it. Getting lean narrows the face and increases the facial index toward the ideal range for many people.' },
    ],
    softmax: [
      { label: 'Hairstyle engineering', detail: 'Round face (low index): add height at crown, no volume at sides. Angular hairstyles. Avoid round bowl cuts. Long face (high index): add width at sides, curtain hair, waves. Avoid very tall hairstyles.' },
    ],
    medmax: [
      { label: 'Buccal fat removal (round face)', detail: 'Slims the mid-face dramatically, increasing facial index. Most effective at 20–28 years at a healthy weight. Do not perform if already very lean.' },
      { label: 'Jaw slimming Botox (round face)', detail: 'Masseter Botox 20–30 units/side reduces jaw width, slimming the lower face and increasing facial index. One of the most effective non-surgical facial index improvements.' },
    ],
    hardmax: [
      { label: 'Chin implant (low index — round face)', detail: 'Adding chin projection increases the face height measurement, improving the facial index. Combined with buccal fat removal for a full round-face correction.' },
      { label: 'Cheekbone implants (high index — narrow face)', detail: 'Adding bizygomatic width via implants increases the face width denominator, reducing a too-high facial index toward the ideal.' },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════
     NEOCLASSICAL CANONS
  ══════════════════════════════════════════════════════════════════ */
  neoclassical: {
    title: 'Neoclassical Canons',
    why: 'The 1/5 eye rule (each eye = 1/5 face width) and equal intercanthal/eye-width ratio. These proportions, codified by Renaissance sculptors studying ideal faces, remain predictive of attractiveness ratings. Violations of these canons are noticed subconsciously even by untrained observers.',
    diet: [],
    softmax: [
      { label: 'Eye makeup to adjust perceived proportions', detail: 'Eyes too small vs face: extend the outer corner of the eye with liner (cat-eye technique) and use false lashes. Eyes too far apart: use darker shadow on the inner corner. Eyes too close: highlight the inner corner, extend the outer corner.' },
    ],
    medmax: [
      { label: 'Canthal lengthening (small eye ratio)', detail: 'Medial or lateral canthoplasty to increase the horizontal width of the palpebral fissure. Changes the eye-to-face width ratio directly. Permanent.' },
    ],
    hardmax: [
      { label: 'Lateral canthoplasty (close-set eyes)', detail: 'Lengthening the lateral palpebral fissure to widen eye spacing. Increases the neoclassical intercanthal ratio.' },
      { label: 'Orbital rim implants (small eye ratio)', detail: 'Increasing the periorbital frame creates an appearance of larger eyes in the context of the face. Custom PEEK implants around the orbital rim.' },
    ],
  },

};

// Universal foundation stack — recommended regardless of specific feature
window.LOOKSMAX_FOUNDATION = {
  title: 'Universal Foundation Stack',
  items: [
    { category: 'SKINCARE', items: [
      'Tretinoin 0.025–0.05% nightly (start 2x/week, build up) — the single most evidence-backed appearance improvement',
      'Vitamin C serum 20% + E + Ferulic acid (Timeless brand) — morning, before SPF',
      'SPF 50 every single morning — prevents collagen degradation, keeps skin even',
      'Moisturiser (CeraVe or Cetaphil) — non-comedogenic, daily',
      'Niacinamide 10% serum — pore reduction, even skin tone, oil control',
    ]},
    { category: 'SUPPLEMENTS', items: [
      'Omega-3 (3–4g EPA/DHA) — anti-inflammatory, skin quality, periorbital health',
      'Vitamin D3 5,000 IU + K2 MK-7 200mcg — bone density, testosterone support',
      'Zinc 15–30mg — testosterone, wound healing, skin, brow/hair growth',
      'Collagen peptides 10g + Vitamin C 500mg — skin elasticity, facial fat quality',
      'Magnesium glycinate 400mg before bed — reduces jaw clenching, improves sleep',
    ]},
    { category: 'LIFESTYLE', items: [
      'Sleep on your back with cervical pillow — reduces facial asymmetry',
      'Nose breathe 100% — prevents maxillary retrusion and facial lengthening',
      'Mewing 24/7 — tongue flat on palate, suction hold, back third especially',
      'Get to 10–12% BF (males) / 14–18% (females) — reveals all bone structure',
      'Lift weights 4x/week — testosterone drives facial bone and muscle development',
    ]},
  ],
};