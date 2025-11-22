// src/api/climaApi.js

export const climaPorProvincia = async (provincia) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      // Simular provincias sin datos (problema obligatorio)
      const provinciasSinDatos = ["Bahoruco", "Elías Piña"];

      if (provinciasSinDatos.includes(provincia)) {
        reject({ message: `No hay datos climáticos disponibles para ${provincia}.` });
        return;
      }

      // Datos simulados
      const clima = {
        temperatura: 29,
        humedad: 70,
        condicion: "Soleado"
      };

      resolve({
        provincia,
        clima
      });
    }, 1000);
  });
};
