import { fetchProductos } from "../api/catalogoApi.js";

export const obtenerCatalogo = async (req, res) => {
  const q = req.query.q || null;
  try {
    const productos = await fetchProductos(q); // tu función mock
    res.json({ ok: true, data: productos });
  } catch (err) {
    res.status(500).json({ ok: false, message: "Error al obtener catálogo", error: err.message });
  }
};

export const obtenerProducto = async (req, res) => {
  try {
    const prod = await fetchProductos().then(arr => arr.find(p => String(p.id) === req.params.id));
    if (!prod) return res.status(404).json({ ok:false, message: "Producto no encontrado" });
    res.json({ ok:true, data: prod });
  } catch(err){
    res.status(500).json({ ok:false, message: "Error", error: err.message });
  }
};
