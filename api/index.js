module.exports = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  res.end(`
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: 'Inter', sans-serif; background: #f4f7f6; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
          .card { background: white; padding: 40px 25px; border-radius: 25px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); text-align: center; width: 320px; }
          .avatar { width: 100px; height: 100px; background: #e0e0e0; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 40px; }
          h1 { margin: 0; font-size: 24px; color: #333; }
          p { color: #777; margin-bottom: 25px; }
          .btn { display: block; width: 100%; padding: 12px; margin: 8px 0; border-radius: 50px; text-decoration: none; font-weight: 600; transition: transform 0.2s; color: white; }
          .btn:active { transform: scale(0.98); }
          .btn-wa { background: #25d366; }
          .btn-ig { background: #E1306C; }
          .btn-web { background: #007bff; }
          .btn-map { background: #333; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="avatar">👤</div>
          <h1>Víctor Amaya</h1>
          <p>Fundador de Toca Sistema</p>
          
          <a href="https://wa.me/573000000000" class="btn btn-wa">WhatsApp</a>
          <a href="https://instagram.com/tuusuario" class="btn btn-ig">Instagram</a>
          <a href="https://tusitio.com" class="btn btn-web">Sitio Web</a>
          <a href="https://maps.google.com/?q=tu+direccion" class="btn btn-map">Ubicación</a>
        </div>
      </body>
    </html>
  `);
};
