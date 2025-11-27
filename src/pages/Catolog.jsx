import React from "react";
import { useLocation } from "react-router-dom";

function Catalogo() {
  const location = useLocation();

  return (
    <div id="main-content">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link text-dark" href="#"
            className={location.pathname === 'home' ? 'active' : ''}>
            Todos
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">
            Herramientas
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">
            Almacenamiento
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">
            Plásticos
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">
            Hogar
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link  text-dark" href="#">
            Accesorios
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">
            Industriales
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">
            Mantenimiento
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">
            Jardineria
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Catalogo;
