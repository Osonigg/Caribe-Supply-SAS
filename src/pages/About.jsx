import React from "react";

function About() {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-6 fw-bold text-secundary">
          Somos Caribe Supply
        </h1>
        <p className="lead text-secondary">
          Conectando el corazón del Caribe con el mundo, producto a producto.
        </p>
      </div>

      {/* Bloque principal: Nuestra Historia y Misión Social */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10">
          <div className="card shadow-sm p-4 p-md-5">
            <h2 className="text-success mb-4">
              Nuestro Compromiso: Artesanía y Microempresas
            </h2>
            <p className="fs-5">
              Caribe Supply nació con la visión de ser más que un proveedor; somos una plataforma que une el talento dominicano. 
              Nos dedicamos a impulsar a cientos de artesanos y microempresas locales, ofreciendo un canal confiable y eficiente para que sus productos lleguen a más hogares en la República Dominicana.
            </p>
            <p className="text-muted fst-italic">
              Cada compra que realizas apoya directamente a una familia, un taller o una pequeña iniciativa, contribuyendo a la economía y cultura local.
            </p>
          </div>
        </div>
      </div>

      {/* Bloque de Misión, Visión, Ubicación y Horarios */}
      <div className="row g-4">
        {/* Misión y Visión */}
        <div className="col-md-6">
          <div className="card h-100 p-4 border-0 shadow-sm">
            <h3 className="text-info mb-3">Misión y Visión</h3>
            <p>
              Misión: Proveer productos de alta calidad de origen local, creando una cadena de suministro justa y transparente que maximice el impacto positivo en nuestros colaboradores (artesanos y microempresarios).
            </p>
            <p>
              Visión: Ser el líder indiscutible en la distribución de productos hechos en la Republica Dominicana, reconocido por nuestro compromiso social y la excelencia en el servicio al cliente.
            </p>
          </div>
        </div>

        {/* Ubicación y Horarios (Con Mapa Integrado) */}
        <div className="col-md-6">
          <div className="card h-100 p-4 border-0 shadow-sm">
            <h3 className="text-danger mb-3">Contáctanos y Visítanos</h3>
            
            <p className="mb-2">
              <i className="bi bi-geo-alt-fill text-danger me-2"></i> 
              Ubicación Física: 
            </p>
            <blockquote className="blockquote border-start border-danger border-4 ps-3">
              <p className="mb-0">
                Calle Pimentel no. 148, Villa Consuelo, Distrito Nacional, Santo Domingo.
              </p>
            </blockquote>
            
            {/* Información y enlace al mapa */}
            <p className="mt-3">
              Puedes encontrarnos en Google Maps buscando, Caribe Supplyrd, también en nuestras redes sociales como Instagram y Facebook, te esperamos.
              <br/>
              <a href="https://maps.google.com/?cid=5425522579483709009&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ" target="_blank" rel="noopener noreferrer">
                Ver Ubicación en Google Maps
              </a>
            </p>
            
            <hr className="my-3"/>

            <p className="mb-2">
              <i className="bi bi-clock-fill text-danger me-2"></i> 
              Horarios:
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between">
                Lunes a Sábado: <span>8:00am - 6:00pm</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                Domingos: <span>9:00am - 2:00pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;