import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import productsData from "./productsData";
import Product from "./Product";

function Catalogo() {
  const location = useLocation();

  return (
    <div className="container">
      <nav>
        {/* Usamos overflow-auto para permitir scroll horizontal en móviles si hay muchas pestañas */}
        <div className="overflow-auto">
          <ul className="nav nav-tabs flex-wrap">
            {/* Ejemplo de cómo manejar la clase 'active' con lógica de React/JSX */}
            <li className="nav-item">
              <Link
                className={`nav-link text-secondary ${
                  location.pathname === "/catalog" ? "active" : ""
                }`}
                to="/catalog"
              >
                Todos
              </Link>
            </li>

            {/* El resto de los elementos (activos por defecto o inactivos) */}

            <li className="nav-item">
              <Link 
                className={`nav-link text-secondary ${
                  location.pathname === "/catalog" ? "active" : ""
                  }`} 
                to="/catalog">
                Almacenamiento
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link text-secondary ${
                  location.pathname === "/catalog" ? "active" : ""
                  }`}>
                Plásticos
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link text-secondary ${
                  location.pathname === "/catalog" ? "active" : ""
                  }`} >
                Hogar
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link text-secondary ${
                  location.pathname === "/catalog" ? "active" : ""
                  }`} >
                Accesorios
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link text-secondary ${
                  location.pathname === "/catalog" ? "active" : ""
                  }`} >
                Jardineria
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* contenido en pagina catalogo */}

      <h1 className="catalog-title p-3">Catálogo de Productos</h1>
      <div className="catalog-container">
        <div className="product-list row">
          {productsData.map((product) => (
            // Renderiza un ProductCard para cada producto, usando el id como key
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalogo;
