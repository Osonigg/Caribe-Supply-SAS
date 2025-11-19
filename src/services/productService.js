// -------------------------------------------------------------
// Servicio para obtener productos desde MockAPI
// -------------------------------------------------------------

const API_URL = "https://mockapi.io/your-products-endpoint";

export async function getProducts() {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error al cargar productos:", error);
    throw error;
  }
}
