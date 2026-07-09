module.exports = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  res.end(`
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: 'Segoe UI', sans-serif; background: #000; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
          .card { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.1); padding: 40px; border-radius: 40px; text-align: center; width: 320px; color: white; }
          .avatar { width: 120px; height: 120px; border-radius: 50%; border: 4px solid #ff6600; margin: 0 auto 20px; background: #333; }
          .btn-main { background: #ff6600; color: white; padding: 15px; border-radius: 50px; text-decoration: none; display: block; font-weight: bold; margin-bottom: 30px; }
          .icons-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; margin-bottom: 40px; }
          .icon-item { text-align: center; color: #aaa; font-size: 10px; }
          .icon-circle { width: 45px; height: 45px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 5px; color: #ff6600; font-weight: bold; }
          .portafolio-cta { border-top: 1px solid #333; padding-top: 20px; }
          .btn-portafolio { background: transparent; color: #ff6600; border: 2px solid #ff6600; padding: 12px; border-radius: 50px; text-decoration: none; font-weight: bold; display: block; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="avatar"></div>
          <h1>Víctor Amaya</h1>
          <p>Gerente General - TÓCALA</p>
          
          <a href="URL_TU_VCARD" class="btn-main">💾 Guardar contacto</a>
          
          <div class="icons-grid">
            <div class="icon-item"><div class="icon-circle">📞</div>Llamar</div>
            <div class="icon-item"><div class="icon-circle">✉️</div>Correo</div>
            <div class="icon-item"><div class="icon-circle">in</div>Link</div>
            <div class="icon-item"><div class="icon-circle">IG</div>Inst</div>
            <div class="icon-item"><div class="icon-circle">🌐</div>Sitio</div>
          </div>
          
          <div class="portafolio-cta">
            <p style="font-size: 12px; margin-bottom: 10px;">Recibir mi portafolio</p>
            <a href="URL_PORTAFOLIO" class="btn-portafolio">Enviar directo</a>
          </div>
        </div>
      </body>
    </html>
  `);
};
