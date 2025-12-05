import React from "react";

function About() {
  return (
    <div className="container">
      <div className="container-fluid form-floating my-4">
        <strong>Nuestra Historia:</strong>
        <p>
          Breve relato de cómo Caribe Supply se convirtió en un proveedor
          confiable en la RD.
        </p>
        <strong>Misión y Visión:</strong>
        <p>Declaración simple de tu compromiso con los clientes.</p>
        <strong>Ubicación Física:</strong>
        <p>
          <b>Visítanos:</b> Calle Pimentel no. 148, Villa Consuelo, Distrito
          Nacional, Santo Domingo.
        </p>
        <strong>Horarios:</strong>
        <p>Lunes a Sábado: 8:00am - 6:00pm | Domingos: 9:00am - 2:00pm.</p>
      </div>
    </div>
  );
}

export default About;
