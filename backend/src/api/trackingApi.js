// src/api/trackingApi.js

export const obtenerTracking = async (codigo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if (!codigo) {
        reject({ message: "Debe ingresar un código de seguimiento." });
        return;
      }

      const estados = [
        "Preparando envío",
        "En tránsito",
        "Llegó al país",
        "En oficina local",
        "Entregado"
      ];

      const estado = estados[Math.floor(Math.random() * estados.length)];

      resolve({
        codigo,
        estado,
        fecha: new Date().toLocaleString()
      });
    }, 900);
  });
};
