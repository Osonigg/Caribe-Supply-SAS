const { getTasasMock } = require("../api/tasasApi");

exports.obtenerTasas = (req, res) => {
  const tasas = getTasasMock();
  res.json(tasas);
};
