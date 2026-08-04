/**
 * /hello ships its own self-contained stylesheet rather than Tailwind utilities.
 * It is a conference QR landing page shown on unfamiliar phones over hotel wifi,
 * so it stays deliberately independent of the design system: system fonts, large
 * touch targets, no webfont to wait for.
 */
export const HELLO_CSS = `
.h-page{--ink:#141414;--paper:#f4f3f1;--dim:#5f5c58;--line:rgba(20,20,20,.14);
background:var(--paper);color:var(--ink);min-height:100vh;
font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
font-size:16px;line-height:1.5;-webkit-font-smoothing:antialiased}
.h-wrap{max-width:34rem;margin:0 auto;padding:20px 20px 56px}
.h-mark{font-size:17px;letter-spacing:.16em;text-transform:uppercase;font-weight:600;margin:0 0 28px}
.h-h1{font-size:32px;line-height:1.1;letter-spacing:-.02em;font-weight:600;margin:0 0 16px}
.h-lead{font-size:17px;color:var(--dim);margin:0 0 8px}
.h-cta{display:flex;align-items:center;justify-content:center;width:100%;min-height:54px;
background:var(--ink);color:var(--paper);font-size:17px;font-weight:600;text-decoration:none;margin-top:24px}
.h-cta:active{opacity:.85}
.h-rule{border:0;border-top:1px solid var(--line);margin:32px 0}
.h-row{display:flex;align-items:center;min-height:48px;font-size:17px;text-decoration:none;color:var(--ink);
border:1px solid var(--ink);padding:12px 16px;margin-bottom:12px;font-weight:600}
.h-row.quiet{border-color:var(--line);color:var(--dim);font-weight:400;font-size:16px}
.h-label{font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:var(--dim);margin:0 0 12px}
.h-rsi{list-style:none;padding:0;margin:0}
.h-rsi li{padding:12px 0;border-top:1px solid var(--line);font-size:16px;color:var(--dim)}
.h-rsi b{color:var(--ink);display:inline-block;min-width:74px}
.h-facts{font-size:16px;color:var(--dim);margin:20px 0 0}
.h-form label{display:block;font-size:14px;letter-spacing:.08em;text-transform:uppercase;color:var(--dim);margin:16px 0 6px}
.h-form input,.h-form select,.h-form textarea{width:100%;font-size:16px;font-family:inherit;color:var(--ink);
background:#fff;border:1px solid var(--line);padding:13px 12px;min-height:48px;border-radius:0;-webkit-appearance:none;appearance:none}
.h-form textarea{min-height:76px}
.h-form button{width:100%;min-height:54px;margin-top:24px;background:var(--ink);color:var(--paper);
font-size:17px;font-weight:600;font-family:inherit;border:0;border-radius:0}
.h-note{font-size:16px;color:var(--dim);margin-top:16px}
.h-note a{color:var(--ink)}
.h-done{border:1px solid var(--ink);padding:20px;font-size:17px}
@media(min-width:768px){.h-wrap{max-width:40rem;padding:48px 32px 80px}.h-h1{font-size:44px}}
`;
