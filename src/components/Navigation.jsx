import logo from "../logo.png";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";

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
  
  const [searchTerm, setSearchTerm] = useState();
  
  const handleSearch = (event) => {
    event.preventDefault();
    // Aquí puedes añadir la lógica para buscar productos reales
    // 3. Actualiza la UI con los nuevos resultados

    console.log("Buscando:", searchTerm);
    alert(`Buscando productos que coincidan con: ${searchTerm}`);
  };
  
  const [itemCount] = useState(0);

  const handleCartClick = () => {
    // alert("Funcionalidad del carrito de compras (Checkout) prÃ³ximamente.");
    // Redirigir a la pÃ¡gina del carrito
    // history.push('/carrito');
  };

  // Aquí podrías añadir lógica para comprobar si el usuario ya está logueado
  const isLoggedIn = false; // Simulación: cambiar a true si el usuario ha iniciado

  return (
    <nav
      className="navbar navbar-expand-lg col-lg-0"
      aria-label="Navegación principal"
    >
      <div className="container-fluid">
        <Link
          to="/"
          className="navbar-brand d-flex aling-items-center me-auto"
          onClick={() => handleLinkClick("home")}
        >
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            aria-label="Caribe Supply Logo"
          />
        </Link>

        {/* BOTÓN HAMBURGUESA (Toggler) */}
        <button
          className="navbar-toggler me-auto py-3"
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

        {/* contenedor barra de busqueda, carrito y autenticacion */}
        <div className="d-flex flex-column flex-lg-row align-items-lg-left gap-2 mt-lg-0">
          {/* barra de busqueda */}
          <div className="col-12 col-md-auto justify-content-center">
            <form
              className="input-group col-md-auto"
              role="search"
              onSubmit={handleSearch}
            >
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
          <div class="d-flex me-auto">
            <div className="cart-icon-container">
              <Link
                to="/carbasket"
                className={
                  location.pathname === "/carbasket"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <button
                  type="button"
                  className="btn btn-secundary h-100"
                  onClick={handleCartClick}
                  aria-label="View Shopping cart"
                >
                  <FaShoppingBasket className="cart-icon" />
                </button>
              </Link>
              {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
            </div>

            {/* autenticacion, Botón de Inicio de Sesión / Cerrar Sesión */}
            <div className="authetication d-flex me-auto gap-2">
              {isLoggedIn ? (
                <button
                  className="btn btn-light"
                  type="button"
                  onClick={() => alert("cerrando sesion...")}
                >
                  Log up
                </button>
              ) : (
                <Link to="/login" className="btn btn-light">
                  Log in
                </Link>
              )}
              <Link to="/register" className="btn btn-light">
                Sign-up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
