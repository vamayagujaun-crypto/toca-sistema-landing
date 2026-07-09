module.exports = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  res.end(`
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: 'Segoe UI', sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f0f2f5; }
          .card { background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align: center; width: 300px; }
          .btn { display: block; width: 100%; padding: 12px; margin: 10px 0; border-radius: 8px; text-decoration: none; color: white; font-weight: bold; }
          .btn-wa { background-color: #25d366; }
          .btn-tel { background-color: #007bff; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Víctor Amaya</h1>
          <p style="color: #666;">Fundador de Toca Sistema</p>
          <a href="https://wa.me/573000000000" class="btn btn-wa">Enviar WhatsApp</a>
          <a href="tel:+573000000000" class="btn btn-tel">Llamar Ahora</a>
        </div>
      </body>
    </html>
  `);
};
