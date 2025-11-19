// -------------------------------------------------------------
// Servicio: Tasas de cambio desde API pública
// -------------------------------------------------------------

const EXCHANGE_URL = "https://api.exchangerate-api.com/v4/latest/USD";

export async function getExchangeRates() {
  try {
    const res = await fetch(EXCHANGE_URL);

    if (!res.ok) {
      throw new Error("Error al obtener tasas de cambio");
    }

    const data = await res.json();

    return {
      base: data.base,
      fecha: data.date,
      tasas: data.rates
    };
  } catch (error) {
    console.error("Error API Exchange:", error);
    throw error;
  }
}
