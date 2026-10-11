/**
 * /hello ships its own self-contained stylesheet rather than Tailwind utilities.
 * It is a QR landing page opened on unfamiliar phones over unfamiliar wifi, so it
 * stays deliberately independent of the design system: system fonts, large touch
 * targets, no webfont to wait for. Everything else — paper/ink palette, zero
 * radius, hairline rules, tracked uppercase labels, the single signal accent —
 * mirrors the main site so the page still reads as Mirrorfolio.
 */
export const HELLO_CSS = `
.h-page{--ink:#141414;--paper:#f4f3f1;--dim:#5f5c58;--line:rgba(20,20,20,.14);--signal:#ee6a2c;
background:var(--paper);color:var(--ink);min-height:100vh;
font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
font-size:16px;line-height:1.5;-webkit-font-smoothing:antialiased}
@supports (color:oklch(0 0 0)){.h-page{--signal:oklch(.66 .19 45)}}
.h-wrap{max-width:34rem;margin:0 auto;padding:20px 20px 56px}
.h-page section{scroll-margin-top:20px}
.h-page a:focus-visible,.h-page button:focus-visible,.h-page input:focus-visible,
.h-page select:focus-visible,.h-page textarea:focus-visible{outline:2px solid var(--ink);outline-offset:2px}

/* Masthead — the whole pitch, before anyone scrolls. */
.h-mark{font-size:17px;letter-spacing:.16em;text-transform:uppercase;font-weight:600;margin:0 0 26px}
.h-h1{font-size:32px;line-height:1.1;letter-spacing:-.02em;font-weight:600;margin:0 0 10px;text-wrap:balance}
.h-sub{font-size:17px;font-weight:600;margin:0 0 18px;text-wrap:pretty}
.h-lead{font-size:17px;color:var(--dim);margin:0 0 12px;text-wrap:pretty}
.h-lead:last-child{margin-bottom:0}
.h-stamp{display:flex;align-items:center;gap:9px;font-size:12px;letter-spacing:.12em;
text-transform:uppercase;color:var(--dim);margin:22px 0 0}
.h-stamp:before{content:"";width:6px;height:6px;background:var(--signal);flex:none}

/* Section furniture. */
.h-rule{border:0;border-top:1px solid var(--line);margin:32px 0}
.h-label{font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:var(--dim);margin:0 0 14px}
.h-label.h-mid{margin-top:26px}
.h-h2{font-size:23px;line-height:1.18;letter-spacing:-.015em;font-weight:600;margin:0 0 12px;text-wrap:balance}
.h-p{font-size:16px;color:var(--dim);margin:0 0 12px;text-wrap:pretty}
.h-p:last-child{margin-bottom:0}
.h-p b{color:var(--ink);font-weight:600}
.h-quiet{font-size:15px;color:var(--dim);margin:16px 0 0;text-wrap:pretty}

/* Link rows — title, one line of why, and what it costs to open. */
.h-list{list-style:none;padding:0;margin:0}
.h-row{display:flex;align-items:flex-start;gap:14px;text-decoration:none;color:var(--ink);
border:1px solid var(--line);padding:14px 16px;margin:0 0 10px;min-height:48px}
.h-row:active{opacity:.85}
.h-list li:last-child .h-row{margin-bottom:0}
.h-b{flex:1 1 auto;min-width:0}
.h-t{display:block;font-size:17px;font-weight:600;line-height:1.3}
.h-d{display:block;font-size:15px;color:var(--dim);margin-top:4px;text-wrap:pretty}
.h-k{flex:none;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--dim);padding-top:5px}
.h-up{display:block;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--dim);margin-top:6px}
.h-row.h-strong{border-color:var(--ink)}
.h-row.h-fill{background:var(--ink);border-color:var(--ink);color:var(--paper)}
.h-row.h-fill .h-d,.h-row.h-fill .h-k{color:rgba(244,243,241,.7)}

/* Sense · Learn · Notice · Act. */
.h-rsi{list-style:none;padding:0;margin:0}
.h-rsi li{padding:12px 0;border-top:1px solid var(--line);font-size:16px;color:var(--dim);text-wrap:pretty}
.h-rsi li:last-child{border-bottom:1px solid var(--line)}
.h-rsi b{color:var(--ink);display:inline-block;min-width:74px}

/* Photographic evidence, framed as a plate with a caption strip. */
.h-figure{margin:0 0 22px;border:1px solid var(--line)}
.h-figure img{display:block;width:100%;height:auto}
.h-cap{font-size:13px;color:var(--dim);padding:11px 14px;border-top:1px solid var(--line);text-wrap:pretty}

/* Today → next → later. */
.h-ladder{list-style:none;padding:0;margin:0}
.h-ladder li{padding:14px 0;border-top:1px solid var(--line)}
.h-ladder li:last-child{border-bottom:1px solid var(--line)}
.h-when{display:block;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--dim);margin:0 0 6px}
.h-ladder li:first-child .h-when{color:var(--signal)}
.h-ladder p{margin:0;font-size:16px;color:var(--dim);text-wrap:pretty}
.h-ladder p b{color:var(--ink);font-weight:600}

/* Numbers, with their meaning attached. */
.h-proof{list-style:none;padding:0;margin:0}
.h-proof li{display:flex;gap:14px;padding:12px 0;border-top:1px solid var(--line)}
.h-proof li:last-child{border-bottom:1px solid var(--line)}
.h-num{flex:none;min-width:64px;font-size:18px;font-weight:600;letter-spacing:-.01em}
.h-team,.h-devices{margin-top:14px}
.h-devices .h-num{min-width:112px;font-size:15px}
.h-stage{display:block;margin-top:4px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--signal)}
.h-team .h-num{min-width:128px;font-size:16px}
.h-proof p{margin:0;font-size:16px;color:var(--dim);text-wrap:pretty}

/* Founder. */
.h-founder{border:1px solid var(--line);padding:18px}
.h-founder p{margin:0 0 12px;font-size:16px;color:var(--dim);text-wrap:pretty}
.h-sig{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--dim);margin:0}
.h-sig b{display:block;color:var(--ink);font-weight:600;margin-bottom:3px}

/* Section menu: collapsed list on phones, sticky rail beside the column on wide screens. */
html:has(.h-page){scroll-behavior:smooth}
.h-jump{margin:22px 0 0;border:1px solid var(--line)}
.h-jump summary{cursor:pointer;list-style:none;padding:13px 16px;min-height:48px;font-size:13px;
letter-spacing:.14em;text-transform:uppercase;color:var(--dim)}
.h-jump summary::-webkit-details-marker{display:none}
.h-jump ul,.h-rail ul{list-style:none;margin:0;padding:0}
.h-jump li a{display:block;padding:11px 16px;border-top:1px solid var(--line);color:var(--ink);text-decoration:none;font-size:16px}
.h-rail{display:none}
.h-rail a{display:block;padding:6px 0 6px 12px;border-left:2px solid var(--line);color:var(--dim);text-decoration:none;font-size:14px;line-height:1.35}
.h-rail a[aria-current="true"]{border-left-color:var(--signal);color:var(--ink);font-weight:600}
.h-rail a:hover{color:var(--ink)}

/* Concept screen of the family app. Illustrative only, so it is built in HTML
   rather than shipped as an image: it scales and stays readable. */
.h-appfig{margin:0}
.h-app{--a-line:rgba(244,243,241,.12);--a-dim:rgba(244,243,241,.55);position:relative;width:min(320px,100%);
margin:0 auto;border:9px solid #0a0a0a;border-radius:36px;background:var(--ink);color:var(--paper);overflow:hidden}
.h-app-notch{position:absolute;top:7px;left:50%;transform:translateX(-50%);width:80px;height:18px;background:#0a0a0a;border-radius:12px}
.h-app-status{display:flex;justify-content:space-between;padding:11px 20px 0;font-size:12px;font-weight:600}
.h-app-body{padding:16px 16px 6px}
.h-app-top{display:flex;justify-content:space-between;align-items:center}
.h-app-brand{font-size:12px;letter-spacing:.16em;text-transform:uppercase;font-weight:600;color:var(--signal)}
.h-app-dim{font-size:11px;color:var(--a-dim)}
.h-app-title{margin:14px 0 2px;font-size:19px;line-height:1.2;font-weight:600}
.h-app-sub{margin:0 0 12px;font-size:12px;color:var(--a-dim)}
.h-app-alert{display:flex;align-items:center;gap:8px;background:var(--signal);color:var(--ink);padding:10px 12px;font-weight:700;font-size:14px}
.h-app-alert:before{content:"";width:7px;height:7px;background:var(--ink);flex:none}
.h-app-rows,.h-app-chart{margin-top:10px;border:1px solid var(--a-line);background:#1f1f1f}
.h-app-row{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:10px 12px;border-top:1px solid var(--a-line);font-size:13px}
.h-app-row:first-child{border-top:0}
.h-app-row small{display:block;margin-top:2px;font-size:11px;color:var(--a-dim)}
.h-app-tag{flex:none;font-size:10px;letter-spacing:.1em;text-transform:uppercase;padding:3px 6px;border:1px solid var(--a-line);color:rgba(244,243,241,.7)}
.h-app-tag.h-app-warn{background:var(--signal);border-color:var(--signal);color:var(--ink);font-weight:700}
.h-app-chart{padding:10px 12px}
.h-app-cap{display:flex;justify-content:space-between;margin-bottom:8px;font-size:11px;color:var(--a-dim)}
.h-app-bars{position:relative;display:flex;align-items:flex-end;gap:6px;height:44px}
.h-app-bars i{flex:1;display:block;background:rgba(244,243,241,.35)}
.h-app-bars i.lo{background:var(--signal)}
.h-app-bars:after{content:"";position:absolute;left:0;right:0;bottom:30px;border-top:1px dashed rgba(244,243,241,.5)}
.h-app-days{display:flex;gap:6px;margin-top:4px;font-size:9px;color:rgba(244,243,241,.4)}
.h-app-days span{flex:1;text-align:center}
.h-app-btn{margin-top:8px;padding:12px;text-align:center;font-weight:700;font-size:14px;background:var(--paper);color:var(--ink)}
.h-app-btn:first-of-type{margin-top:12px}
.h-app-out{background:transparent;color:var(--paper);border:1px solid rgba(244,243,241,.5)}
.h-app-foot{margin:10px 0 0;text-align:center;font-size:10px;color:rgba(244,243,241,.4)}
.h-app-home{width:96px;height:4px;margin:6px auto 8px;background:rgba(244,243,241,.4);border-radius:3px}
.h-app-cap-text{margin-top:14px;border-top:0;padding:0;text-align:center}

/* Why us: a reel of frames, one per chapter of the story. */
.h-reel{list-style:none;margin:20px 0 0;padding:0}
.h-frame{position:relative;margin:0 0 14px 22px;padding:14px 16px;border:1px solid var(--line);background:#fff}
.h-frame:before{content:"";position:absolute;left:-22px;top:20px;width:9px;height:9px;background:var(--signal)}
.h-frame:after{content:"";position:absolute;left:-18px;top:29px;bottom:-15px;border-left:1px solid var(--line)}
.h-frame:last-child:after{display:none}
.h-fk{display:block;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--signal)}
.h-ff{display:block;margin:4px 0 6px;font-size:22px;line-height:1.15;font-weight:600;letter-spacing:-.015em}
.h-frame p{margin:0;font-size:15px;color:var(--dim);text-wrap:pretty}
.h-story{margin-bottom:6px}
.h-vis{display:flex;flex-wrap:wrap;gap:5px;margin:2px 0 12px}
.h-vis i{display:block}
.h-v-dots i{width:8px;height:8px;border-radius:50%;background:var(--ink);opacity:.35}
.h-v-dots i.on{background:var(--signal);opacity:1}
.h-v-sq i{width:12px;height:12px;border:1px solid var(--ink)}
.h-v-sq i:nth-child(n){background:var(--ink)}
.h-v-gens i{width:22px;height:22px;border:1px solid var(--ink);
background:linear-gradient(to top right,transparent calc(50% - .5px),var(--ink) 50%,transparent calc(50% + .5px))}
.h-v-gens i.on{background:var(--signal);border-color:var(--signal)}
.h-v-shift{align-items:center;gap:8px}
.h-v-shift b{font-size:12px;letter-spacing:.08em;text-transform:uppercase;padding:6px 9px;border:1px solid var(--ink);font-weight:600}
.h-v-shift b.on{background:var(--signal);border-color:var(--signal);color:var(--ink)}
.h-v-shift em{font-style:normal;color:var(--dim)}
.h-v-wave{gap:0;width:100%;max-width:260px}
.h-v-wave i{font-style:normal;height:26px;line-height:26px;text-align:center;font-size:12px;font-weight:600}
.h-v-wave .w50{flex:50;background:var(--ink);color:var(--paper)}
.h-v-wave .w4{flex:4;min-width:30px;background:var(--signal);color:var(--ink)}
.h-terms .h-num{min-width:128px;font-size:15px}

/* The ask: amount, terms and use of funds. */
.h-ask-amt{margin:0 0 14px;font-size:34px;line-height:1.1;font-weight:600;letter-spacing:-.02em}
.h-ask-amt span{display:block;margin-top:6px;font-size:13px;font-weight:400;letter-spacing:.12em;text-transform:uppercase;color:var(--dim)}
.h-funds{list-style:none;margin:0 0 16px;padding:0}
.h-funds li{display:grid;grid-template-columns:1fr auto;gap:4px 12px;padding:9px 0;border-top:1px solid var(--line)}
.h-funds li:last-child{border-bottom:1px solid var(--line)}
.h-fn{font-size:15px}
.h-fv{font-size:14px;color:var(--dim);white-space:nowrap}
.h-fbar{grid-column:1/-1;display:block;height:6px;background:rgba(20,20,20,.07)}
.h-fbar i{display:block;height:100%;background:var(--signal)}

/* Form. */
.h-form label{display:block;font-size:13px;letter-spacing:.12em;text-transform:uppercase;
font-weight:600;color:var(--ink);margin:20px 0 7px}
.h-form .h-hint{display:block;font-size:14px;font-weight:400;letter-spacing:0;text-transform:none;
color:var(--dim);margin-top:5px}
.h-form input,.h-form select,.h-form textarea{width:100%;font-size:16px;font-family:inherit;color:var(--ink);
background:#fff;border:1px solid var(--line);padding:13px 12px;min-height:48px;border-radius:0;-webkit-appearance:none;appearance:none}
.h-form input:focus,.h-form select:focus,.h-form textarea:focus{border-color:var(--ink)}
.h-form select{padding-right:40px;background-repeat:no-repeat;background-position:right 14px center;
background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1.5L6 6.5l5-5' fill='none' stroke='%235f5c58' stroke-width='1.6'/%3E%3C/svg%3E")}
.h-form textarea{min-height:76px}
.h-form button{width:100%;min-height:54px;margin-top:26px;background:var(--ink);color:var(--paper);
font-size:17px;font-weight:600;font-family:inherit;border:0;border-radius:0}
.h-form button:disabled{opacity:.6}
.h-note{font-size:15px;color:var(--dim);margin-top:16px;text-wrap:pretty}
.h-note a{color:var(--ink)}
.h-done{border:1px solid var(--ink);padding:20px;font-size:17px}
.h-done p{margin:0 0 12px;text-wrap:pretty}
.h-done p:last-child{margin:0;font-size:15px;color:var(--dim)}

/* Footer — the details someone may want months later. */
.h-foot{margin:36px 0 0;font-size:15px;color:var(--dim);line-height:1.85}
.h-foot a{color:var(--ink);text-decoration:none;border-bottom:1px solid var(--line);word-break:break-word}
.h-fine{display:block;margin-top:12px;font-size:13px;color:var(--dim)}

@media(min-width:1180px){
.h-jump{display:none}
.h-rail{display:block;position:fixed;top:48px;left:calc(50% - 20rem - 14rem);width:12rem}
}
@media(min-width:768px){
.h-wrap{max-width:40rem;padding:48px 32px 88px}
.h-h1{font-size:44px}
.h-h2{font-size:27px}
.h-rule{margin:40px 0}
}
`;
