import React from "react";

function Contact() {
  return (
    <div class="container-fluid form-floating my-4">
        <strong><h3>Contacto y Soporte</h3></strong>
        <p>¿Tienes preguntas sobre nuestros productos, pedidos o buscas un artículo específico? Completa el formulario 
          y nos pondremos en contacto contigo.
        </p>
                            
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">Contáctanos - Caribe Supply</h4>
                        </div>
                        <div class="card-body">
                            
                            <form action="tu_script_de_procesamiento.php" method="POST">
                                
                                
                                <div class="mb-3">
                                    <label for="nombre" class="form-label">Nombre Completo:</label>
                                    <input type="text" class="form-control" id="nombre" name="nombre" required/>
                                </div>

                         
                                <div class="mb-3">
                                    <label for="email" class="form-label">Correo Electrónico:</label>
                                    <input type="email" class="form-control" id="email" name="email" required/>
                                </div>

                              
                                <div class="mb-3">
                                    <label for="telefono" class="form-label">Teléfono / WhatsApp:</label>
                                    <input type="tel" class="form-control" id="telefono" name="telefono"/>
                                </div>

                                <div class="mb-3">
                                    <label for="mensaje" class="form-label">Tu Mensaje o Consulta:</label>
                                    <textarea class="form-control" id="mensaje" name="mensaje" rows="4" required></textarea>
                                </div>

                                
                                <button type="submit" class="btn btn-primary w-50 d-block mx-auto">
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="form-floating my-4">
          <p>Teléfono: (809) 795-1036</p>
          <p>WhatsApp: 809-795-1036 (con un enlace directo WhatsApp link)</p>
          <p>Correo Electrónico: info@caribesupply.com</p>
        </div>
      </div>
  );
}

export default Contact;
