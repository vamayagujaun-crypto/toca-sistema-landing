module.exports = (req, res) => {
  // Estos son los datos de tu cliente (ejemplo)
  const cliente = {
    nombre: "Víctor Amaya",
    empresa: "Toca Sistema",
    cargo: "Fundador",
    telefono: "+573000000000",
    email: "contacto@tocasistema.com"
  };

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(cliente));
};
