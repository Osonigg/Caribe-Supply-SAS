import React from "react";
import { Link, useLocation } from "react-router-dom";
import Home from "./Home";

function Register() {
  const location = useLocation();

  return (
    <main><div className="auth-container w-60 m-auto">
      <form>
        <h2 class="h3 mb-3 fw-normal">Registro de Usuario</h2>
        
       
        <label>Nombre Completo:</label>
        <br />
        <input type="text" placeholder="Jhon Doe" />
        <br />
        <br />
        
        <label>Correo Electrónico:</label>
        <br />
        <input type="email" placeholder="jhondoe@example.com" />
        <br />
        <br />

        <label>Contraseña:</label>
        <br />
        <input type="password" placeholder="***********" />
        <br />
        <br />

        <label>Confirmar Contraseña:</label>
        <br />
        <input type="password" placeholder="***********" />
        <br />
        <br />

       <button class="btn btn-primary mb-3 w-80 py-2" type="submit">Entrar</button> 
      </form>
      <p>
        ¿Ya tienes cuenta?
        <Link to="/login" className={location.pathname === "/login"}>
          Inicia Sesión
        </Link>
      </p>
    </div></main>
  );
}

export default Register;
