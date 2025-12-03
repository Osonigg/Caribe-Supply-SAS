import React from "react";

function Home() {
  return (
    <div className="container">
      {/* contenido de pagina */}
      <div className="overflow-auto row mt-4 mx-auto">
        <aside className="col-12 col-md-4 mb-4">
          <div className="card m-2 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Another longer title belongs here</h3>
              <p className="card-text">
                <small className="text-muted">California</small>
              </p>
            </div>
          </div>

          <div className="card m-2 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Another longer title belongs here</h3>
              <p className="card-text">
                <small className="text-muted">California</small>
              </p>
            </div>
          </div>

          <div className="card m-2 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Another longer title belongs here</h3>
              <p className="card-text">
                <small className="text-muted">California</small>
              </p>
            </div>
          </div>
        </aside>

        <div className="contentPage col-12 col-md-8 p-3">
          <h4>
            Caribe Supply: Tu Solución Integral en Suministros para el Hogar y
            la Industria en República Dominicana.
          </h4>
          <p>
            Desde plásticos y ferretería hasta equipos para el hogar y la
            industria. Todo lo que necesitas, en un solo lugar, con la confianza
            local.
          </p>

          <article></article>

          <section className="container-fluid my-2 p-3 border">
            <strong>
              <h5>Nuestros Pilares</h5>
            </strong>
            <p>
              Variedad Insuperable: Un poco de TODO lo que puedes conseguir en
              Caribe Supply.
            </p>
            <p>
              Calidad Garantizada: Productos duraderos de marcas reconocidas.
            </p>
            <p>
              Servicio Local: Ubicados en Villa Consuelo, Santo Domingo, con
              entrega a domicilio.
            </p>
            <p>Precios Competitivos: Aprovecha nuestras grandes ofertas.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
