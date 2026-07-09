module.exports = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  res.end(`
    <html>
      <head><meta charset="UTF-8"></head>
      <body style="font-family: sans-serif; text-align: center; padding: 50px;">
        <h1>Víctor Amaya</h1>
        <p>Toca Sistema</p>
        <div style="margin-top: 20px;">
          <a href="tel:+573000000000" style="padding: 10px 20px; background: #25d366; color: white; text-decoration: none; border-radius: 5px;">Llamar</a>
        </div>
      </body>
    </html>
  `);
};
