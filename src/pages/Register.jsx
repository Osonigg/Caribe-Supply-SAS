import React from "react";
import { Link, useLocation } from "react-router-dom";
import Home from "./Home";

function Register() {
    const location = useLocation();

    return (
        <div className="auth-container">
            <h2>Registro de Usuario</h2>
            <form>
                <label>Nombre Completo:</label><br />
                <input type="text" placeholder="Jhon Doe"/><br /><br />
                
                <label>Correo Electrónico:</label><br />
                <input type="email" placeholder="jhondoe@example.com" /><br /><br />
            
                <label>Contraseña:</label><br />
                <input type="password" placeholder="***********"/><br /><br />

                <label>Confirmar Contraseña:</label><br />
                <input type="password" placeholder="***********"/><br /><br />
            
                <button type="submit" >Registrarse</button>
            </form>
            <p>¿Ya tienes cuenta? 
                <Link 
                    to="/login"
                    className={location.pathname === "/login"}
                >Inicia Sesión</Link></p>
        </div>
    )
}

export default Register;