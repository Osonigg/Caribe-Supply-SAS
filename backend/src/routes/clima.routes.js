const express = require("express");
const router = express.Router();
const controller = require("../controllers/clima.controller");

router.get("/:provincia", controller.obtenerClima);

module.exports = router;
