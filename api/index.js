module.exports = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  res.end(`
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          :root { --bg: #000000; --accent: #ff6600; --text: #ffffff; }
          body { font-family: 'Helvetica', sans-serif; background: var(--bg); color: var(--text); display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
          .card { background: #111; padding: 40px 30px; border-radius: 20px; border: 1px solid #333; text-align: center; width: 320px; box-shadow: 0 10px 30px rgba(255,102,0,0.1); }
          .logo { font-size: 28px; font-weight: bold; letter-spacing: 5px; margin-bottom: 20px; color: var(--text); }
          .logo span { color: var(--accent); }
          h1 { margin: 0; font-size: 22px; }
          p { color: #aaa; margin-bottom: 30px; font-size: 14px; }
          .btn { display: block; width: 100%; padding: 14px; margin: 12px 0; border: 1px solid var(--accent); border-radius: 8px; text-decoration: none; font-weight: 500; color: white; transition: 0.3s; text-align: center; }
          .btn:hover { background: var(--accent); color: black; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="logo">TÓ<span>CALA</span></div>
          <h1>Víctor Amaya</h1>
          <p>Gerente General</p>
          
          <a href="URL_TU_VCARD" class="btn">Descargar Contacto (.vcf)</a>
          <a href="https://wa.me/573000000000" class="btn">WhatsApp</a>
          <a href="https://linkedin.com/in/tuperfil" class="btn">Conecta con LinkedIn</a>
          <a href="https://tusitio.com" class="btn">Mi Portafolio</a>
        </div>
      </body>
    </html>
  `);
};
