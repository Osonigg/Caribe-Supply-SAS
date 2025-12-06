import React from "react";

function Home() {
  return (
    <div className="container mt-4">

      <header className="p-5 mb-4 bg-light rounded-3 shadow-sm text-center bg-warning text-dark">
        <div className="container-fluid py-5">
          <h1 className="display-6 fw-bold">Caribe Supply: Más que Suministros, Herencia Dominicana</h1>
          <p className="col-md-8 fs-5 mx-auto">
            Desde la ferretería más robusta hasta la artesanía hecha a mano por nuestro pueblo. Somos el puente entre la tradición dominicana y las necesidades del hogar moderno y la industria.
          </p>
        </div>
      </header>

      <div className="overflow-auto row mx-auto justify-content-center"> 
        
        <aside className="col-12 col-md-4 mb-4">
          <h4 className="mb-3 text-secondary border-bottom pb-2 text-center">Nuestro Enfoque</h4>

          <div className="card m-2 shadow-sm border-danger">
            <div className="card-body text-center">
              <h5 className="card-title text-danger">Artesanía Local</h5>
              <p className="card-text small">Un compromiso con el talento local. Piezas únicas hechas a mano por artesanos que mantienen viva nuestra cultura.</p>
            </div>
          </div>
          
          <div className="card m-2 shadow-sm border-primary">
            <div className="card-body text-center"> 
              <h5 className="card-title text-primary">Pinturas locales</h5>
              <p className="card-text small">Apoyando los pintores locales con la venta de pinturas de gran calidad.</p>
            </div>
          </div>

          <div className="card m-2 shadow-sm border-success">
            <div className="card-body text-center"> 
              <h5 className="card-title text-success">Artículos para el Hogar</h5>
              <p className="card-text small">Utensilios de cocina, organización y soluciones prácticas para hacer de tu espacio un mejor lugar.</p>
            </div>
          </div>

        </aside>

        <div className="contentPage col-12 col-md-8 p-3 mb-3">
          
          <article className="container-fluid mb-5 p-4 border rounded-3 shadow bg-light text-center">
            <h4 className="text-secondary mb-3">Nuestra Historia y Misión</h4>
            <p className="text-start">
              Fundada en el corazón de Santo Domingo, Caribe Supply nació de la necesidad de unificar la oferta de suministros duraderos y la promoción del arte local. Desde 1995, hemos crecido de ser una pequeña ferretería en Villa Consuelo a un proveedor integral que valora tanto la calidad de un tornillo industrial como la autenticidad de una pieza de ámbar dominicano.
            </p>
            <p className="fw-bold text-start">
              Nuestra misión es sencilla: Suministrar productos confiables para la vida diaria y los grandes proyectos, mientras celebramos y apoyamos la herencia cultural y artesanal de la República Dominicana.
            </p>
          </article>

          <section className="container-fluid mb-5 py-4 border rounded-3 shadow-sm bg-light text-center">
            <h4 className="mb-4 border-bottom pb-2">Valores Clave de Caribe Supply</h4>
            
            <div className="row justify-content-center">
              <div className="col-sm-6 col-lg-3 mb-3">
                <h6>Calidad Garantizada</h6>
                <p className="small text-muted">Solo trabajamos con marcas probadas y duraderas.</p>
              </div>
              <div className="col-sm-6 col-lg-3 mb-3">
                <h6>Apoyo Artesanal</h6>
                <p className="small text-muted">Impulsamos el talento local con piezas 100% dominicanas.</p>
              </div>
              <div className="col-sm-6 col-lg-3 mb-3">
                <h6>Base Local Fuerte</h6>
                <p className="small text-muted">Conocemos el mercado y te ofrecemos soporte desde Villa Consuelo, RD.</p>
              </div>
            </div>
          </section>

          <section className="container-fluid mb-3 py-4 border rounded-3 shadow-sm bg-white">
            <h4 className="mb-4 text-secondary text-center border-bottom pb-2">Información Relevante</h4>
            <div className="row justify-content-center">
              <div className="col-md-5 mb-3 text-center">
                <p className="fw-bold mb-1">Cuidado del Producto Artesanal</p>
                <p className="small text-muted">La madera, el barro y las fibras naturales dominicanas requieren un cuidado especial para preservar su belleza y durabilidad.</p>
              </div>
              <div className="col-md-5 mb-3 text-center">
                <p className="fw-bold mb-1">Guía de Electricidad Segura</p>
                <p className="small text-muted">Conoce el voltaje estándar en la República Dominicana (110v/120v) y cómo proteger tus equipos con reguladores de calidad.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;