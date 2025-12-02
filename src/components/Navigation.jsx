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
  // Estado para controlar si el menú hamburguesa está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
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
    <nav className="navbar navbar-expand-lg" aria-label="Navegación principal">
      <div className="container-fluid">
        <Link
          to="/"
          className="navbar-brand d-flex aling-items-center me-auto"
          onClick={() => handleLinkClick("home")}
        >
          <img
            src={logo}
            className="App-logo bi me-2"
            alt="logo"
            role="img"
            aria-label="Caribe Supply Logo"
          />
        </Link>

        {/* BOTÓN HAMBURGUESA (Toggler) */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNavCollapse"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* barra de navegacion*/}
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNavCollapse"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                aria-current={activeLink === "home" ? "page" : undefined}
                onClick={() => {
                  handleLinkClick("home");
                  setIsMenuOpen(false);
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/catalog"
                className={`nav-link ${
                  activeLink === "catalog" ? "active" : ""
                }`}
                onClick={() => {
                  handleLinkClick("catalog");
                  setIsMenuOpen(false);
                }}
              >
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                className={`nav-link ${
                  activeLink === "contact" ? "active" : ""
                }`}
                onClick={() => {
                  handleLinkClick("contact");
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="faqs"
                className={`nav-link ${activeLink === "faqs" ? "active" : ""}`}
                onClick={() => {
                  handleLinkClick("faqs");
                  setIsMenuOpen(false);
                }}
              >
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className={`nav-link ${activeLink === "about" ? "active" : ""}`}
                onClick={() => {
                  handleLinkClick("about");
                  setIsMenuOpen(false);
                }}
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-2 mt-2 mt-lg-0">
          {/* barra de busqueda */}
          <div className="col-12 col-md-auto">
            <form className="input-group" role="search" onSubmit={handleSearch}>
              {/* Vinculamos la función al evento submit */}
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm()} // Capturamos cada cambio en el input
              />
              <button
                type="submit"
                className="btn btn-outline-light"
                id="btn-search"
              >
                <svg
                  xmlns="www.w3.org"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
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
              type="button"
              className="btn btn-secundary"
              height="16"
              onClick={handleCartClick}
              aria-label="View Shopping cart"
            >
              <svg
                xmlns="www.w3.org"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-basket"
                viewBox="0 0 16 16"
              >
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.071 1.757a.5.5 0 1 1 .858-.514L13.71 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.79L5.071 1.243a.5.5 0 0 1 .686-.172zM3.383 6.5h9.234L11.5 10H4z" />
                <path d="M4.214 10.154L4 14.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5l-.214-4.346L11.5 10H4z" />
              </svg>
            </button>
          </div>

          {/* autenticacion */}
          <div className="authetication d-flex gap-2">
            <Link href="/login" className="btn btn-light">
              Login
            </Link>
            <Link href="/register" className="btn btn-light">
              Sign-up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
