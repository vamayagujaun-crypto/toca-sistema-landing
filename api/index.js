module.exports = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  res.end(`
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: 'Helvetica Neue', sans-serif; background: #050505; color: white; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
          .card { background: #121212; padding: 40px; border-radius: 40px; text-align: center; width: 320px; border: 1px solid #333; }
          .avatar { width: 120px; height: 120px; border-radius: 50%; border: 4px solid #ff6600; margin: 0 auto 20px; background: #333; object-fit: cover; }
          .btn-main { background: #ff6600; color: white; padding: 18px; border-radius: 20px; text-decoration: none; display: block; font-weight: bold; margin-bottom: 30px; box-shadow: 0 10px 20px rgba(255, 102, 0, 0.3); }
          .icons-grid { display: flex; justify-content: space-between; margin-bottom: 40px; }
          .icon-item { text-align: center; }
          .icon-circle { width: 55px; height: 55px; background: #1a1a1a; border: 1px solid #333; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; box-shadow: 0 5px 10px rgba(0,0,0,0.5); margin-bottom: 8px; transition: 0.3s; }
          .icon-circle:hover { background: #ff6600; }
          .portafolio-box { background: rgba(255, 102, 0, 0.05); padding: 20px; border-radius: 20px; border: 1px dashed #ff6600; }
          .text-small { color: #888; font-size: 11px; margin-top: 8px; }
        </style>
      </head>
      <body>
        <div class="card">
          <img src="URL_DE_TU_FOTO" class="avatar" alt="Víctor Amaya">
          <h1>Víctor Amaya</h1>
          <p style="color: #ff6600;">Gerente General | TÓCALA</p>
          
          <a href="URL_TU_VCARD" class="btn-main">💾 Guardar contacto</a>
          
          <div class="icons-grid">
            <div class="icon-item"><div class="icon-circle">📞</div></div>
            <div class="icon-item"><div class="icon-circle">✉️</div></div>
            <div class="icon-item"><div class="icon-circle">in</div></div>
            <div class="icon-item"><div class="icon-circle">IG</div></div>
            <div class="icon-item"><div class="icon-circle">🌐</div></div>
          </div>
          
          <div class="portafolio-box">
            <a href="URL_PORTAFOLIO" style="color: white; font-weight: bold; text-decoration: none; display: block;">Recibir mi portafolio</a>
            <div class="text-small">Víctor Amaya te lo envía directo, sin intermediarios.</div>
          </div>
        </div>
      </body>
    </html>
  `);
};
