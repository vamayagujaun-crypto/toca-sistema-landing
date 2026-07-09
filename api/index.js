module.exports = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  res.end(`
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          :root { --primary: #004a99; --accent: #ffb703; } /* Ajusta estos colores */
          body { font-family: 'Segoe UI', sans-serif; background: #f8f9fa; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
          .card { background: white; padding: 40px 25px; border-radius: 30px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); text-align: center; width: 320px; border-top: 8px solid var(--primary); }
          .avatar { width: 100px; height: 100px; background: var(--primary); color: white; border-radius: 20px; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 30px; font-weight: bold; transform: rotate(-5deg); }
          h1 { margin: 10px 0 5px; color: #333; }
          .tagline { color: var(--primary); font-weight: bold; margin-bottom: 25px; text-transform: uppercase; letter-spacing: 1px; font-size: 12px; }
          .btn { display: block; width: 100%; padding: 14px; margin: 10px 0; border-radius: 12px; text-decoration: none; font-weight: 600; color: white; transition: 0.3s; }
          .btn-primary { background: var(--primary); }
          .btn-secondary { background: var(--accent); color: #333; }
          .btn:hover { opacity: 0.9; transform: translateY(-2px); }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="avatar">TS</div>
          <h1>Víctor Amaya</h1>
          <div class="tagline">Toca Sistema | Soluciones IT</div>
          
          <a href="URL_TU_VCARD" class="btn btn-secondary">💾 Guardar Contacto</a>
          <a href="https://wa.me/573000000000" class="btn btn-primary">WhatsApp</a>
          <a href="https://instagram.com/tuusuario" class="btn btn-primary">Instagram</a>
          <a href="https://tusitio.com" class="btn btn-primary">Sitio Web</a>
        </div>
      </body>
    </html>
  `);
};
