import React from "react";
import { Link, useLocation } from "react-router-dom";

function Register() {
  const location = useLocation();

  return (
    <main>
      <div className="form-signup d-flex justify-content-center py-4 vh-100">
        <form>
          <h2 className="mb-4 fw-normal text-center">Registro de Usuario</h2>

          {/* Grupo de formulario para Nombre Completo */}
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Nombre Completo:
            </label>
            <input
              type="text"
              id="fullName"
              className="form-control"
              placeholder="Jhon Doe"
            />
          </div>

          {/* Grupo de formulario para Correo Electrónico */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="jhondoe@example.com"
            />
          </div>

          {/* Grupo de formulario para Contraseña */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="***********"
            />
          </div>

          {/* Grupo de formulario para Confirmar Contraseña */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirmar Contraseña:
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              placeholder="***********"
            />
          </div>

          <button className="btn btn-primary mb-3 d-block mx-auto" type="submit">
            Registrar
          </button>

          {/* Párrafo con enlace centrado */}
          <p className="text-center">
            ¿Ya tienes cuenta?
            {/* Asumiendo que Link es de react-router-dom */}
            <Link
              to="/login"
              className={`ms-1 ${
                location.pathname === "/login" ? "active-link" : ""
              }`}
            >
              Inicia Sesión
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default Register;
