// -------------------------------------------------------------
// Servicio: Preguntas Frecuentes (FAQs) desde MockAPI
// -------------------------------------------------------------

const FAQ_URL = "https://mockapi.io/your-faq-endpoint";

export async function getFAQs() {
  try {
    const res = await fetch(FAQ_URL);

    if (!res.ok) {
      throw new Error("Error al cargar FAQs");
    }

    return await res.json();
  } catch (error) {
    console.error("Error API FAQs:", error);
    throw error;
  }
}
