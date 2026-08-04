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
.h-proof p{margin:0;font-size:16px;color:var(--dim);text-wrap:pretty}

/* Founder. */
.h-founder{border:1px solid var(--line);padding:18px}
.h-founder p{margin:0 0 12px;font-size:16px;color:var(--dim);text-wrap:pretty}
.h-sig{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--dim);margin:0}
.h-sig b{display:block;color:var(--ink);font-weight:600;margin-bottom:3px}

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

@media(min-width:768px){
.h-wrap{max-width:40rem;padding:48px 32px 88px}
.h-h1{font-size:44px}
.h-h2{font-size:27px}
.h-rule{margin:40px 0}
}
`;
