import logo from "./logo1.png";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";


function Navigation() {
  const location = useLocation();

  // Inicializamos el estado con la ruta actual o el ID del enlace activo
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    // Aquí puedes añadir la lógica para buscar productos reales
    // 3. Actualiza la UI con los nuevos resultados

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
        <a
          href="/"
          class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          onClick={() => handleLinkClick("home")}
          className={`d-flex ${activeLink === "home" ? "active" : ""}`}
        >
          <img src={logo} className="App-logo" alt="logo" class="bi me-2"
            width="100"
            height=""
            role="img"
            aria-label="Bootstrap" />
        </a>

        {/* barra de navegacion*/}
        <ul class="nav nav-justified col-12 col-md-auto me-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link
              to="/"
              class="nav-link px-2 text-white"
              arial-current="page"
              onClick={() => handleLinkClick("home")}
              className={`nav-link ${activeLink === "home" ? "active" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/catalog"
              class="nav-link px-2 text-white"
              onClick={() => handleLinkClick("catalog")}
              className={`nav-link ${activeLink === "catalog" ? "active" : ""}`}
            >
              Catalog
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              class="nav-link px-2 text-white"
              onClick={() => handleLinkClick("contact")}
              className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="faqs"
              class="nav-link px-2 text-white"
              onClick={() => handleLinkClick("faqs")}
              className={`nav-link ${activeLink === "faqs" ? "active" : ""}`}
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="about"
              class="nav-link px-2 text-white"
              onClick={() => handleLinkClick("about")}
              className={`nav-link ${activeLink === "about" ? "active" : ""}`}
            >
              About
            </Link>
          </li>
        </ul>

        {/* barra de busqueda */}
        <div class="col-4 col-md-4 py-0">
          <form class="input-group" role="search" onSubmit={handleSearch}>
            {" "}
            {/* Vinculamos la función al evento submit */}
            <input
              type="search"
              class="form-control"
              placeholder="Search..."
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm()} // Capturamos cada cambio en el input
            />
            <button type="submit" class="btn btn-outline-light" id="btn-search">
              <svg
                xmlns="www.w3.org"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </form>
        </div>

        {/* Botón del Carrito a la derecha -->*/}
        <div class="d-flex">
          <button
            type="submit"
            class="btn btn-secundary"
            height="16"
            onSubmit={handleCartClick}
          >
            <svg
              xmlns="www.w3.org"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-basket"
              viewBox="0 0 16 16"
            >
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.071 1.757a.5.5 0 1 1 .858-.514L13.71 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.79L5.071 1.243a.5.5 0 0 1 .686-.172zM3.383 6.5h9.234L11.5 10H4z" />
              <path d="M4.214 10.154L4 14.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5l-.214-4.346L11.5 10H4z" />
            </svg>
          </button>
        </div>

        {/* autenticacion */}
        <div class="authetication">
          <a href="/login" class="btn btn-light">Login</a>
          <a href="/register" class="btn btn-light">Sign-up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
