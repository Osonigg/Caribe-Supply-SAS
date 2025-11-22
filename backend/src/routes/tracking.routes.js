const express = require("express");
const router = express.Router();
const controller = require("../controllers/tracking.controller");

router.get("/:codigo", controller.obtenerTracking);

module.exports = router;
