const express = require("express");
const router = express.Router();
const controller = require("../controllers/catalogo.controller");

router.get("/", controller.obtenerCatalogo);

module.exports = router;
