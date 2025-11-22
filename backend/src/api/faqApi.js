// src/api/faqApi.js

export const obtenerFAQ = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          pregunta: "¿Los envíos son internacionales?",
          respuesta: "Sí, enviamos a más de 20 países."
        },
        {
          pregunta: "¿Puedo pagar con tarjeta?",
          respuesta: "Sí, aceptamos Visa, Mastercard y PayPal (simulado)."
        },
        {
          pregunta: "¿Los productos son 100% dominicanos?",
          respuesta: "Sí, trabajamos exclusivamente con artesanos y productores locales."
        }
      ]);
    }, 600);
  });
};
