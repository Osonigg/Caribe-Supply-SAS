// src/api/catalogoApi.js

export const fetchProductos = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {

      const productos = [
        // ============================
        // 1. GOURMET Y AGROPECUARIOS
        // ============================
        {
          id: 1,
          nombre: "Café de Jarabacoa Premium",
          categoria: "Gourmet",
          precio: 550,
          imagen: "/img/cafe-jarabacoa.jpg"
        },
        {
          id: 2,
          nombre: "Cacao Orgánico de San Francisco",
          categoria: "Gourmet",
          precio: 480,
          imagen: "/img/cacao-organico.jpg"
        },
        {
          id: 3,
          nombre: "Miel de la Sierra 100% Natural",
          categoria: "Gourmet",
          precio: 380,
          imagen: "/img/miel-sierra.jpg"
        },
        {
          id: 4,
          nombre: "Chocolate Artesanal 70% Cacao",
          categoria: "Gourmet",
          precio: 320,
          imagen: "/img/chocolate-artesanal.jpg"
        },
        {
          id: 5,
          nombre: "Dulce de Coco Tradicional",
          categoria: "Gourmet",
          precio: 150,
          imagen: "/img/dulce-coco.jpg"
        },

        // ============================
        // 2. ARTESANÍA Y CULTURA
        // ============================
        {
          id: 6,
          nombre: "Muñeca Sin Rostro",
          categoria: "Artesanía",
          precio: 750,
          imagen: "/img/muneca-sin-rostro.jpg"
        },
        {
          id: 7,
          nombre: "Piedra Larimar Pulida",
          categoria: "Artesanía",
          precio: 1200,
          imagen: "/img/larimar.jpg"
        },
        {
          id: 8,
          nombre: "Ámbar Dominicano Auténtico",
          categoria: "Artesanía",
          precio: 1800,
          imagen: "/img/ambar-dominicano.jpg"
        },
        {
          id: 9,
          nombre: "Cuadro Pintado a Mano — Calle Colonial",
          categoria: "Artesanía",
          precio: 950,
          imagen: "/img/cuadro-colonial.jpg"
        },
        {
          id: 10,
          nombre: "Cartera tejida por artesanos",
          categoria: "Artesanía",
          precio: 600,
          imagen: "/img/cartera-tejida.jpg"
        },

        // ============================
        // 3. BELLEZA Y CUIDADO NATURAL
        // ============================
        {
          id: 11,
          nombre: "Jabón Artesanal de Miel y Avena",
          categoria: "Belleza",
          precio: 180,
          imagen: "/img/jabon-miel.jpg"
        },
        {
          id: 12,
          nombre: "Aceite de Coco Extra Virgen",
          categoria: "Belleza",
          precio: 260,
          imagen: "/img/aceite-coco.jpg"
        },
        {
          id: 13,
          nombre: "Crema Hidratante de Café",
          categoria: "Belleza",
          precio: 350,
          imagen: "/img/crema-cafe.jpg"
        },
        {
          id: 14,
          nombre: "Mascarilla de Arcilla Natural",
          categoria: "Belleza",
          precio: 300,
          imagen: "/img/mascarilla-arcilla.jpg"
        },
        {
          id: 15,
          nombre: "Perfume Artesanal de Flores Caribeñas",
          categoria: "Belleza",
          precio: 950,
          imagen: "/img/perfume-caribeno.jpg"
        },

        // ============================
        // 4. TEXTILES / MODA LOCAL
        // ============================
        {
          id: 16,
          nombre: "Camiseta Bordada a Mano",
          categoria: "Moda",
          precio: 650,
          imagen: "/img/camiseta-bordada.jpg"
        },
        {
          id: 17,
          nombre: "Sombrero de Yarey",
          categoria: "Moda",
          precio: 550,
          imagen: "/img/sombrero-yarey.jpg"
        },
        {
          id: 18,
          nombre: "Bolso Ecológico de Yute",
          categoria: "Moda",
          precio: 470,
          imagen: "/img/bolso-yute.jpg"
        },
        {
          id: 19,
          nombre: "Pulseras Artesanales Caribeñas",
          categoria: "Moda",
          precio: 220,
          imagen: "/img/pulseras-artesanales.jpg"
        },
        {
          id: 20,
          nombre: "Pañuelo Teñido a Mano",
          categoria: "Moda",
          precio: 290,
          imagen: "/img/panuelo-tenido.jpg"
        },

        // ============================
        // 5. DECORACIÓN Y HOGAR
        // ============================
        {
          id: 21,
          nombre: "Vaso tallado en Coco",
          categoria: "Decoración",
          precio: 300,
          imagen: "/img/vaso-coco.jpg"
        },
        {
          id: 22,
          nombre: "Lámpara Artesanal de Bambú",
          categoria: "Decoración",
          precio: 1100,
          imagen: "/img/lampara-bambu.jpg"
        },
        {
          id: 23,
          nombre: "Cuenco de Madera Caribeña",
          categoria: "Decoración",
          precio: 450,
          imagen: "/img/cuenco-madera.jpg"
        },
        {
          id: 24,
          nombre: "Porta Velas Tallado a Mano",
          categoria: "Decoración",
          precio: 380,
          imagen: "/img/porta-velas.jpg"
        },
        {
          id: 25,
          nombre: "Set de Posavasos de Palma Real",
          categoria: "Decoración",
          precio: 250,
          imagen: "/img/posavasos-palma.jpg"
        }
      ];

      resolve(productos);

    }, 900);
  });
};
