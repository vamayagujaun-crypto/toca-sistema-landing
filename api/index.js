module.exports = (req, res) => {
  const cliente = {
    nombre: "Víctor Amaya",
    empresa: "Toca Sistema",
    telefono: "+573000000000",
    email: "contacto@tocasistema.com"
  };

  const html = `
    <html>
      <body style="font-family: sans-serif; text-align: center; padding: 50px;">
        <h1>${cliente.nombre}</h1>
        <p>${cliente.empresa}</p>
        <div style="margin-top: 20px;">
          <a href="tel:${cliente.telefono}" style="padding: 10px 20px; background: #25d366; color: white; text-decoration: none; border-radius: 5px;">Llamar</a>
          <a href="mailto:${cliente.email}" style="padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; margin-left: 10px;">Email</a>
        </div>
      </body>
    </html>
  `;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
};
