const express = require("express");
const router = express.Router();
const controller = require("../controllers/faq.controller");

router.get("/", controller.obtenerFaq);

module.exports = router;
