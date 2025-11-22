// src/api/tasasApi.js

export const obtenerTasas = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // A veces falta la tasa EUR (problema obligatorio)
      const faltaEUR = Math.random() < 0.3;

      resolve({
        USD: 59.10,
        EUR: faltaEUR ? null : 63.50,
        CAD: 42.30
      });
    }, 800);
  });
};
