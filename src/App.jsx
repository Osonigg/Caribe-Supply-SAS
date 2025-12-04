import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import Home from "./pages/Home.jsx";
import Catalogo from "./pages/Catolog.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import CarBasket from "./pages/CarBasket.jsx";
import Product from "./pages/Product.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import FAQs from "./pages/FAQs.jsx";
import Policy from "./pages/Policy.jsx";
import Carousel from "./components/Carousel.jsx";
import Checkout from "./pages/Checkout.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <div className="container-fluid d-flex p-1 mt-1">
          <aside class="container col-12 col-md-8 col-md-4 mb-3 me-auto text-dark">
            api bolsa
          </aside>
          <ThemeToggle />
        </div>
        <Navigation />
      </header>

      <Carousel />

      {/* anuncios */}
      <div class="main-content">
        <main class="container col-12 col-md-8 col-md-4">
          {/* Las Rutas definen qué componente se muestra según la URL */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catalog" element={<Catalogo />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/carbasket" element={<CarBasket />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product" element={<Product />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* Puedes añadir una ruta para errores 404 */}
            <Route path="*" element={<h2>404 Página no encontrada</h2>} />
          </Routes>
        </main>
      </div>

      <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        {" "}
        <button
          class="btn btn-primary py-2 dropdown-toggle d-flex align-items-center"
          id="bd-theme"
          type="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          aria-label="Toggle theme (dark)"
        >
          {" "}
          <svg class="bi my-1 theme-icon-active" aria-hidden="true">
            <use href="#moon-stars-fill"></use>
          </svg>{" "}
          <span class="visually-hidden" id="bd-theme-text">
            Toggle theme
          </span>{" "}
        </button>{" "}
        <ul
          class="dropdown-menu dropdown-menu-end shadow"
          aria-labelledby="bd-theme-text"
        >
          {" "}
          <li>
            {" "}
            <button
              type="button"
              class="dropdown-item d-flex align-items-center"
              data-bs-theme-value="light"
              aria-pressed="false"
            >
              {" "}
              <svg class="bi me-2 opacity-50" aria-hidden="true">
                <use href="#sun-fill"></use>
              </svg>
              Light
              <svg class="bi ms-auto d-none" aria-hidden="true">
                <use href="#check2"></use>
              </svg>{" "}
            </button>{" "}
          </li>{" "}
          <li>
            {" "}
            <button
              type="button"
              class="dropdown-item d-flex align-items-center active"
              data-bs-theme-value="dark"
              aria-pressed="true"
            >
              {" "}
              <svg class="bi me-2 opacity-50" aria-hidden="true">
                <use href="#moon-stars-fill"></use>
              </svg>
              Dark
              <svg class="bi ms-auto d-none" aria-hidden="true">
                <use href="#check2"></use>
              </svg>{" "}
            </button>{" "}
          </li>{" "}
          <li>
            {" "}
            <button
              type="button"
              class="dropdown-item d-flex align-items-center"
              data-bs-theme-value="auto"
              aria-pressed="false"
            >
              {" "}
              <svg class="bi me-2 opacity-50" aria-hidden="true">
                <use href="#circle-half"></use>
              </svg>
              Auto
              <svg class="bi ms-auto d-none" aria-hidden="true">
                <use href="#check2"></use>
              </svg>{" "}
            </button>{" "}
          </li>{" "}
        </ul>{" "}
      </div>

      <footer class="my-2">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="/" class="nav-link px-2 text-body-white">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="/policy" class="nav-link px-2 text-body-white">
              Policy
            </a>
          </li>
          <li class="nav-item">
            <a href="/faqs" class="nav-link px-2 text-body-white">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="/about" class="nav-link px-2 text-body-white">
              About
            </a>
          </li>
        </ul>
        <p class="text-center text-body-white">
          © 2025 caribesupply.sas, Todos los derechos reservados.
        </p>{" "}
      </footer>
    </div>
  );
}

export default App;
