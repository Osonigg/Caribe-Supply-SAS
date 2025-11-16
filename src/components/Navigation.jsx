import { Link, useLocation } from 'react-router-dom';
import "./Navigation.css";
import { FaSearch, FaShoppingBasket } from 'react-icons/fa';
import { useState } from 'react';

function Navigation() {
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState('');
  
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
    <nav class='Navigation' aria-label="Navegación principal">
      <div className='nav-pages'>
        <Link 
          to="/" className={location.pathname === "/" ? "nav-item active" : "nav-item"}
        >Inicio</Link>
        <Link 
          to="/catalogo" 
          className={location.pathname === "/catalogo" ? "nav-item active" : "nav-item"}
        >Catalogo</Link>
        <Link 
          to="/about" 
          className={location.pathname === "/about" ? "nav-item active" : "nav-item"}
        >Acerca de</Link>
        <Link 
          to="/contact"
          className={location.pathname === "/contact" ? "nav-item active" : "nav-item"}
        >Contacto</Link>
      </div>

      <div className='nav-search'>
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" aria-label="Buscar">
            <FaSearch />
          </button>
        </form>
      </div>

      <div className="cart-icon-container" onClick={handleCartClick}>
        <Link 
          to="/carbasket" 
          className={location.pathname === "/carbasket" ? "nav-item active" : "nav-item"}>
          <FaShoppingBasket className="cart-icon" />
        </Link> 
        {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
      </div>

      <div>
        {/* El Botón de Inicio de Sesión / Cerrar Sesión */}
          {isLoggedIn ? (
            <button className="auth-button" onClick={() => alert('Cerrando sesión...')}>
              Cerrar Sesión
            </button>
          ) : (
            // Este Link nos lleva a la ruta /login definida en App.js
            <Link to="/login" className="auth-button">
              Iniciar Sesión
            </Link>
          )}
      </div>
    </nav>
  );
}

export default Navigation;