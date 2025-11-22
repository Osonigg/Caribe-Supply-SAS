const express = require("express");
const router = express.Router();
const controller = require("../controllers/tasas.controller");

router.get("/", controller.obtenerTasas);

module.exports = router;
