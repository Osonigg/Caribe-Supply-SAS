import React from "react";

function Contact() {
  return (
    <div className="container-fluid form-floating my-4">
      <strong>
        <h3>Contacto y Soporte</h3>
      </strong>
      <p>
        ¿Tienes preguntas sobre nuestros productos, pedidos o buscas un artículo
        específico? Completa el formulario y nos pondremos en contacto contigo.
      </p>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">Contáctanos - Caribe Supply</h4>
              </div>
              <div className="card-body">
                <form action="tu_script_de_procesamiento.php" method="POST">
                  <div className="mb-3">
                    <label for="nombre" class="form-label">
                      Nombre Completo:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label for="email" class="form-label">
                      Correo Electrónico:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="telefono" class="form-label">
                      Teléfono / WhatsApp:
                    </label>
                    <input
                      type="tel"
                      class="form-control"
                      id="telefono"
                      name="telefono"
                    />
                  </div>

                  <div className="mb-3">
                    <label for="mensaje" class="form-label">
                      Tu Mensaje o Consulta:
                    </label>
                    <textarea
                      className="form-control"
                      id="mensaje"
                      name="mensaje"
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-50 d-block mx-auto"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-floating p-4 my-4">
        <p>Teléfono: (809) 795-1036</p>
        <p>WhatsApp: 809-795-1036 (con un enlace directo WhatsApp link)</p>
        <p>Correo Electrónico: info@caribesupply.com</p>
      </div>
    </div>
  );
}

export default Contact;
