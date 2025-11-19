// -------------------------------------------------------------
// DEMOSTRACIÓN DE FLUJO DE DATOS
// -------------------------------------------------------------

import { getProducts } from "../services/productService";



export async function dataFlowExample() {
  console.log("Iniciando flujo de datos...");

  try {
    const productos = await getProducts();

    console.log("1. Solicitud enviada a MockAPI");
    console.log("2. Respuesta recibida con productos:");
    console.log(productos);

    console.log("3. Los productos luego se envían a los componentes del catálogo");
    console.log("4. El usuario los agrega al carrito");
    console.log("5. El total del carrito se actualiza automáticamente");

    return productos;
  } catch (error) {
    console.error("Error en flujo de datos:", error);
  }
}
