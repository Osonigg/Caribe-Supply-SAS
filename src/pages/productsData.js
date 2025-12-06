// productsData.js
const productsData = [
    {
        id: 1,
        name: 'Tanque Fortigas 12 Lbs',
        description: 'Tanque de gas Fortigas de 12 libras, ideal para uso doméstico o comercial. Fabricado con materiales duraderos y seguros.',
        price: 2035.00,
        image: 'assets/tanque.jpg',
        category: 'hogar',
    },
    {
        id: 2,
        name: 'Bocina Kbroad',
        description: 'Potente bocina Kbroad con excelente calidad de volumen y bajos, perfecta para amenizar fiestas y eventos. Incluye garantía.',
        price: 1500.00,
        image: 'assets/bocina.jpg',
        category: 'accesorios',
    },
    {
        id: 3,
        name: 'Árbol de Navidad Frost 6 pies',
        description: 'Elegante árbol de Navidad artificial \'Frost\' de 6 pies, ideal para decorar el hogar durante las festividades con un aspecto nevado de alta calidad.',
        price: 4500.00,
        image: 'assets/arbol.jpg',
        category: 'hogar',
    },
    {
        id: 4,
        name: 'Silla de Terraza Plástica',
        description: 'Silla plástica de diseño cómodo y gran resistencia, perfecta para uso en exteriores, terrazas o jardines. Disponible en varios colores.',
        price: 3100.00,
        image: 'assets/silla.jpg',
        category: 'plasticos',
    },
    {
        id: 'art001',
        name: 'Tazas de aluminio',
        description: 'Juego de tazas de aluminio de alta resistencia, ideales para el día a día o para camping.',
        price: 850,
        category: 'hogar',
        image: 'assets/tazas.png'
    },
    {
        id: 'art002',
        name: 'Pulsera de Larimar',
        description: 'Hermosa pulsera artesanal engarzada con Larimar, la piedra semipreciosa nacional de la República Dominicana.',
        price: 3200,
        category: 'accesorios',
        image: 'assets/larimar.png'
    },
    {
        id: 'art003',
        name: 'Café Orgánico de Barahona (500g)',
        description: 'Exquisito café orgánico molido, cultivado en las fértiles montañas de Barahona (500 gramos). Aroma y sabor inigualables.',
        price: 450,
        category: 'consumibles',
        image: 'assets/cafeb.png'
    },
    {
        id: 'art004',
        name: 'Muñeca sin rostro',
        description: 'Artesanía tradicional: Muñeca de cerámica sin rostro, pintada a mano. Símbolo de la mujer dominicana y su diversidad.',
        price: 1200,
        category: 'artesania',
        image: 'assets/muneca.png'
    },
    {
        id: 'art005',
        name: 'Puros Dominicanos',
        description: 'Selección premium de puros hechos a mano en la República Dominicana, reconocidos mundialmente por su calidad y sabor.',
        price: 5000,
        category: 'consumibles',
        image: 'assets/puros.png'
    },
    {
        id: 'art006',
        name: 'Ron Añejo Reserva',
        description: 'Botella de Ron Añejo Reserva. Un destilado premium con un cuerpo robusto y notas de añejamiento.',
        price: 1500,
        category: 'consumibles',
        image: 'assets/ron.png'
    },
    {
        id: 'art007',
        name: 'Collar Ambar',
        description: 'Elegante collar con piedra de Ámbar dominicano, conocido por su claridad y color único. Pieza de joyería auténtica.',
        price: 2500,
        category: 'accesorios',
        image: 'assets/ambar.png'
    },
    {
        id: 'art008',
        name: 'Mamajuana Premium',
        description: 'Botella de la bebida tradicional dominicana "Mamajuana" en su versión Premium, hecha con ron, vino, miel y especias.',
        price: 780,
        category: 'consumibles',
        image: 'assets/mamajuana.png'
    },
    {
        id: 'art009',
        name: 'Pilones',
        description: 'Par de pilones (morteros) de madera, utensilio esencial en la cocina dominicana para majar especias.',
        price: 430,
        category: 'hogar',
        image: 'assets/pilones.png'
    },
    {
        id: 'art010',
        name: 'Grecas',
        description: 'Cafetera tipo Greca tradicional. El método ideal para preparar el auténtico café dominicano en casa.',
        price: 650,
        category: 'hogar',
        image: 'assets/grecas.png'
    },
    {
        id: 'art011',
        name: 'Cafe Santo Domingo',
        description: 'Paquete de Café Santo Domingo, el café molido más popular y querido en la República Dominicana.',
        price: 280,
        category: 'consumibles',
        image: 'assets/cafesd.png'
    },
    {
        id: 'art012',
        name: 'Souvenir',
        description: 'Pequeño souvenir o recuerdo típico de la República Dominicana, ideal para regalar.',
        price: 250,
        category: 'accesorios',
        image: 'assets/souvenir.png'
    },
    {
        id: 'art013',
        name: 'Carteras de Guano',
        description: 'Carteras o bolsos tejidos a mano con fibra de guano, una artesanía ecológica y tradicional.',
        price: 700,
        category: 'accesorios',
        image: 'assets/cartera.png'
    },
    {
        id: 'art014',
        name: 'Artesanía taina',
        description: 'Figura de artesanía inspirada en la cultura indígena Taína, elaborada en cerámica o madera.',
        price: 500,
        category: 'artesania',
        image: 'assets/taina.png'
    },
    {
        id: 'art015',
        name: 'Maracas',
        description: 'Juego de maracas de madera, perfectas para decorar o usar como instrumento musical.',
        price: 350,
        category: 'artesania',
        image: 'assets/maracas.png'
    },
    {
        id: 'art016',
        name: 'Dominos RD',
        description: 'Juego de Dominó con diseño y temática de la República Dominicana.',
        price: 600,
        category: 'accesorios',
        image: 'assets/dominos.png'
    },
    {
        id: 'art017',
        name: 'Gorra RD',
        description: 'Gorra moderna con bordado o diseño alusivo a la bandera y el país (RD).',
        price: 950,
        category: 'accesorios',
        image: 'assets/gorra1.png'
    },
    {
        id: 'art018',
        name: 'Gorra Las Aguilas',
        description: 'Gorra oficial del equipo de béisbol "Las Águilas Cibaeñas". Ideal para fanáticos.',
        price: 950,
        category: 'accesorios',
        image: 'assets/gorra2.png'
    },
    {
        id: 'art019',
        name: 'Gorra Licey',
        description: 'Gorra oficial del equipo de béisbol "Los Tigres del Licey". Perfecta para los seguidores del equipo.',
        price: 950,
        category: 'accesorios',
        image: 'assets/gorra3.png'
    },
    {
        id: 'art020',
        name: 'Gorra Los Gigantes',
        description: 'Gorra oficial del equipo de béisbol "Los Gigantes del Cibao".',
        price: 950,
        category: 'accesorios',
        image: 'assets/gorra4.png'
    },
    {
        id: 'art021',
        name: 'Merengue',
        description: 'Pintura artística que captura la alegría y el ritmo del baile nacional, el Merengue.',
        price: 3200,
        category: 'artesania',
        image: 'assets/pintura1.png'
    },
    {
        id: 'art022',
        name: 'Samaná: Playa Bonita',
        description: 'Pintura de paisaje que retrata la belleza natural de Playa Bonita en la península de Samaná.',
        price: 500,
        category: 'artesania',
        image: 'assets/pintura2.png'
    },
    {
        id: 'art023',
        name: 'La Costa',
        description: 'Obra de arte que evoca la tranquilidad y el colorido de la costa caribeña dominicana.',
        price: 500,
        category: 'artesania',
        image: 'assets/pintura3.png'
    },
    {
        id: 'art024',
        name: 'Kit de Regalo 1',
        description: 'Kit de regalo pequeño que incluye una selección de productos artesanales y gastronómicos.',
        price: 450,
        category: 'kits',
        image: 'assets/kit1.png'
    },
    {
        id: 'art025',
        name: 'Kit de Regalo 2',
        description: 'Kit de regalo mediano con una variedad de souvenirs, café y dulces típicos.',
        price: 1200,
        category: 'kits',
        image: 'assets/kit2.png'
    },
    {
        id: 'art026',
        name: 'Kit de Regalo 3',
        description: 'Kit de regalo pequeño enfocado en productos de cuidado personal o consumo.',
        price: 420,
        category: 'kits',
        image: 'assets/kit3.png'
    },
    {
        id: 'art027',
        name: 'Kit de Regalo 4',
        description: 'Kit de regalo de valor intermedio con una mezcla de joyería y artesanía local.',
        price: 420,
        category: 'kits',
        image: 'assets/kit4.png'
    },
    {
        id: 'art028',
        name: 'Kit de Regalo 5',
        description: 'Kit de regalo con productos gourmet, ideal para amantes del buen comer.',
        price: 560,
        category: 'kits',
        image: 'assets/kit5.png'
    },
    {
        id: 'art029',
        name: 'Kit de Regalo 6',
        description: 'Kit de regalo con una selección de bebidas y licores tradicionales.',
        price: 470,
        category: 'kits',
        image: 'assets/kit6.png'
    },
    {
        id: 'art030',
        name: 'Kit de Regalo 7',
        description: 'Kit de regalo grande que combina una amplia gama de los productos más representativos del país.',
        price: 1100,
        category: 'kits',
        image: 'assets/kit7.png'
    }
];

export default productsData;