// -------------------------------------------------------------
// Servicio: Seguimiento de envíos (tracking)
// Extraído de MockAPI
// -------------------------------------------------------------

const TRACKING_URL = "https://mockapi.io/your-tracking-endpoint";

export async function getTrackingInfo(id) {
  try {
    const res = await fetch(`${TRACKING_URL}/${id}`);

    if (!res.ok) {
      throw new Error("Datos de seguimiento no encontrados");
    }

    return await res.json();
  } catch (error) {
    console.error("Error al obtener tracking:", error);
    throw error;
  }
}
