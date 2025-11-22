import { obtenerCatalogo } from "../api/catalogoApi.js";

export const getCatalogo = (req, res) => {
    const productos = obtenerCatalogo();
    res.json(productos);
};
