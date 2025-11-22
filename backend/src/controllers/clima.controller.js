const { getClimaMock } = require("../api/climaApi");

exports.obtenerClima = (req, res) => {
  const { provincia } = req.params;
  const clima = getClimaMock(provincia);
  res.json(clima);
};
