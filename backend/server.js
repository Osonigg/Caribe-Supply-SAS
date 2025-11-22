import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./src/routes/auth.routes.js";
import catalogoRoutes from "./src/routes/catalogo.routes.js";
import climaRoutes from "./src/routes/clima.routes.js";
import tasasRoutes from "./src/routes/tasas.routes.js";
import trackingRoutes from "./src/routes/tracking.routes.js";
import faqRoutes from "./src/routes/faq.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/catalogo", catalogoRoutes);
app.use("/api/clima", climaRoutes);
app.use("/api/tasas", tasasRoutes);
app.use("/api/tracking", trackingRoutes);
app.use("/api/faq", faqRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Backend Caribe Supply SAS funcionando ✔️");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
