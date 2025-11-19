// -------------------------------------------------------------
// Servicio: Clima por provincia
// -------------------------------------------------------------

const WEATHER_URL = "https://api.weatherapi.com/v1/current.json";
const API_KEY = "TU_API_KEY";

export async function getWeather(provincia) {
  try {
    const res = await fetch(`${WEATHER_URL}?key=${API_KEY}&q=${provincia}`);

    if (!res.ok) {
      throw new Error("No se pudo obtener el clima");
    }

    const data = await res.json();

    return {
      provincia,
      temperatura: data.current.temp_c,
      condicion: data.current.condition.text,
      icono: data.current.condition.icon
    };
  } catch (error) {
    console.error("Error en API de clima:", error);
    throw error;
  }
}
