import React from "react";

function FAQs() {
  return (
    <div class="form-floting my-4">
      <h4>Preguntas Frecuentes (FAQ)</h4>

      <div class="container my-5">
        <div class="accordion" id="faqsAccordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                1. ¿Qué métodos de pago aceptan?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#faqsAccordion"
            >
              <div class="accordion-body">
                Aceptamos pagos en efectivo, transferencias bancarias y pagos
                con tarjeta de crédito/débito directamente en nuestra tienda
                física o mediante link de pago seguro para pedidos a domicilio.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                2. ¿Hacen envíos a domicilio (delivery)?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqsAccordion"
            >
              <div class="accordion-body">
                Sí, ofrecemos servicio de delivery en todo el Distrito Nacional
                y áreas circundantes de Santo Domingo. El costo del envío puede
                variar según tu ubicación exacta. Contáctanos por WhatsApp al
                809-795-1036 para cotizar tu envío.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                3. ¿Venden al por mayor?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faqsAccordion"
            >
              <div class="accordion-body">
                Sí, en Caribe Supply ofrecemos precios especiales al por mayor
                para clientes que requieran grandes volúmenes de plásticos,
                ferretería o suministros industriales. Por favor, contáctanos
                directamente para solicitar una cotización formal.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                4. ¿Dónde están ubicados?
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#faqsAccordion"
            >
              <div class="accordion-body">
                Nuestra tienda física está localizada en la Calle Pimentel no.
                148, Villa Consuelo, Distrito Nacional, Santo Domingo.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
