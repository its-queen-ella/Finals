const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const FULL_NAME = process.env.FULL_NAME || 'MARIELLA G. VILLEROS';
const CLASS_SECTION = process.env.CLASS_SECTION || 'BSIT SM-4102';
const QUOTE = process.env.QUOTE || 'The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt';

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html; charset=utf-8');
  res.send(`<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Welcome</title>
        <style>
          :root{--mint1:#e8fff4;--mint2:#ccf7e0;--card:#fff;--accent:#2b6cb0;--muted:#555;--text:#111;--quote-bg:#f7fffb;--quote-border:rgba(43,108,176,0.08)}
          html,body{height:100%;margin:0}
          body{font-family:Inter,system-ui,Arial,Helvetica,sans-serif;background:linear-gradient(180deg,var(--mint1),var(--mint2));color:#111}
          .wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px}
          .card{background:var(--card);max-width:720px;width:100%;border-radius:12px;box-shadow:0 10px 40px rgba(43,108,176,0.12);padding:36px}
          .name-section{text-align:center;padding-bottom:8px}
          .name-section h1{color:var(--accent);margin:0;font-size:2rem}
          .class-section{font-size:1rem;color:var(--text);margin:12px 0;text-align:center}
          .quote-section{margin-top:16px}
          .quote-section{margin-top:16px}
          .quote-box{background:var(--quote-bg);border-radius:8px;padding:16px;border-left:4px solid var(--quote-border);color:var(--muted)}
          blockquote{margin:0;font-style:italic}
          .meta{font-size:0.95rem;color:var(--text)}
          .topbar{display:flex;justify-content:flex-end;margin-bottom:12px}
          #theme-toggle{background:transparent;border:0;font-size:1.05rem;cursor:pointer;padding:6px;border-radius:6px}
          :root,body{transition:background-color .2s,color .2s}
          .dark{
            --card:#0b1720;
            --accent:#60a5fa;
            --muted:#9aa6b2;
            --text: #e6eef6;
            --quote-bg: rgba(255,255,255,0.03);
            --quote-border: rgba(96,165,250,0.06);
            background:linear-gradient(180deg,#07202a,#0b1720);
            color:var(--text);
          }
          @media (max-width:420px){.card{padding:20px}.name-section h1{font-size:1.4rem}}
        </style>
    </head>
    <body>
          <div class="wrap">
            <div class="card">
              <div class="topbar">
                <button id="theme-toggle" aria-label="Toggle dark mode">🌙</button>
              </div>
              <section class="name-section">
                <h1>${FULL_NAME}</h1>
              </section>

              <section class="class-section">
                <div class="meta"><strong>Class Section:</strong> ${CLASS_SECTION}</div>
              </section>

              <section class="quote-section">
                <div class="quote-box"><blockquote>${QUOTE}</blockquote></div>
              </section>
            </div>
          </div>
          <script>
            (function(){
              const btn = document.getElementById('theme-toggle');
              const bodyEl = document.body;
              function setTheme(theme){
                if(theme === 'dark'){
                  bodyEl.classList.add('dark');
                  btn.textContent = '☀️';
                } else {
                  bodyEl.classList.remove('dark');
                  btn.textContent = '🌙';
                }
                try{ localStorage.setItem('theme', theme); }catch(e){}
              }
              const saved = (()=>{ try{return localStorage.getItem('theme')}catch(e){return null}})();
              if(saved) setTheme(saved);
              else {
                const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                setTheme(prefersDark ? 'dark' : 'light');
              }
              btn.addEventListener('click', ()=>{
                const now = bodyEl.classList.contains('dark') ? 'light' : 'dark';
                setTheme(now);
              });
            })();
          </script>
    </body>
  </html>`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
