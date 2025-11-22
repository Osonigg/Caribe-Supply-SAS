const { getTrackingMock } = require("../api/trackingApi");

exports.obtenerTracking = (req, res) => {
  const { codigo } = req.params;
  const status = getTrackingMock(codigo);
  res.json(status);
};
