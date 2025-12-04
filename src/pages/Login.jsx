import React from "react";
import { Link, useLocation } from "react-router-dom";

function Login() {
  const location = useLocation();

  return (
    <main>
      <div className="form-signin d-flex justify-content-center py-4 vh-100">
        <form>
          <h2 className="mb-4 fw-normal text-center">Iniciar Sesion</h2>

          {/* Grupo de formulario para correo electronico */}
          <div class="form-floating my-4">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Correo electronico</label>
          </div>

          {/* Grupo de formulario para contrasena */}
          <div class="form-floating my-4">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Contrasena</label>
          </div>

          <div className="form-check my-4">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="checkDefault"
            />
            <label className="form-check-label" for="checkDefault">
              Recordarme
            </label>
          </div>

          <button
            className="btn btn-primary mb-3 d-block mx-auto"
            type="button"
            onClick={() => alert('iniciando sesion...')}
          >
            Entrar
          </button>

          <p>
            ¿No tienes cuenta?
            <Link to="/register" className={location.pathname === "/register"}>
              Registrate aqui
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default Login;
