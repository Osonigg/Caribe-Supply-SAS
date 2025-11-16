import React from "react";
import { Link, useLocation } from "react-router-dom";
import Home from "./Home";

function Login() {
    const location = useLocation();

    return (
        <div className="auth-container">
            <h2>iniciar sesion</h2>
            <form>
                <label>email</label><br />
                <input type="email" /><br /><br />

                <label>password</label><br />
                <input type="password" /><br /><br />

                <button type="submit">entrar</button>
            </form>

            <p>¿No tienes cuenta? 
                <Link 
                    to="/register"
                    className={location.pathname === "/register"}
                >Registrate aqui</Link>
            </p>
        </div>
    )
}

export default Login;