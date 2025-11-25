import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { useState } from "react";
import Login from "../pages/Login";

function Navigation() {
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    // Aquí puedes añadir la lógica para buscar productos reales
    console.log("Buscando:", searchTerm);
    alert(`Buscando productos que coincidan con: ${searchTerm}`);
  };

  const [itemCount, setItemCount] = useState();

  const handleCartClick = () => {
    // alert("Funcionalidad del carrito de compras (Checkout) prÃ³ximamente.");
    // Redirigir a la pÃ¡gina del carrito
    // history.push('/carrito');
  };
  // Aquí podrías añadir lógica para comprobar si el usuario ya está logueado
  const isLoggedIn = false; // Simulación: cambiar a true si el usuario ha iniciado

  return (
    <nav class="Navigation" aria-label="Navegación principal">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          {" "}
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            {" "}
            <svg
              class="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
            </svg>{" "}
          </a>{" "}
          
          {/* barra de navegacion*/}
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {" "}
            <li>
              <Link to="/" class="nav-link px-2 text-secondary">
                Home
              </Link>
            </li>{" "}
            <li>
              <Link to="/catalog" class="nav-link px-2 text-white">
                Catalog
              </Link>
            </li>{" "}
            <li>
              <Link to="contact" class="nav-link px-2 text-white">
                Contact
              </Link>
            </li>{" "}
            <li>
              <Link to="faqs" class="nav-link px-2 text-white">
                FAQs
              </Link>
            </li>{" "}
            <li>
              <Link to="about" class="nav-link px-2 text-white">
                About
              </Link>
            </li>{" "}
          </ul>{" "}
          
          {/* barra de busqueda */}
          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            {" "}
            <input
              type="search"
              class="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />{" "}
          </form>{" "}

          {/* autenticacion */}
          <div class="authetication">
            {" "}
            <button type="button" class="btn btn-outline-light me-2" onClick={Login.jsx}>
              Login
            </button>{" "}
            <button type="button" class="btn btn-warning">
              Sign-up
            </button>{" "}
          </div>{" "}
        </div>
  
    </nav>
  );
}

export default Navigation;
