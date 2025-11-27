import React from "react";
import { Link, useLocation } from "react-router-dom";
import Home from "./Home";

function Login() {
  const location = useLocation();

  return (
    <main><div class="form-signin w-50 m-auto"> 
      <form> 
        <h1 class="h3 mb-3 fw-normal">Iniciar Sesion</h1> 
        
        <div class="form-floating my-4"> 
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/> 
          <label for="floatingInput">Correo electronico</label> 
        </div> 
        
        <div class="form-floating my-4"> 
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/> 
          <label for="floatingPassword">Contrasena</label> 
        </div> 
        
        <div class="form-check my-4"> 
          <input class="form-check-input" type="checkbox" value="remember-me" id="checkDefault"/> 
          <label class="form-check-label" for="checkDefault">Recordarme</label> 
        </div> 
        
        <button class="btn btn-primary mb-3 w-50 d-block mx-auto" type="submit">Entrar</button> 
      </form> 

      <p>
        ¿No tienes cuenta?
        <Link to="/register" className={location.pathname === "/register"}>
          Registrate aqui
        </Link>
      </p>
    </div></main>
  );
}

export default Login;