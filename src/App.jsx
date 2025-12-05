import "./App.css";
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
import { CartProvider } from "./CartContext.js";


function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <div className="container d-flex p-1 mt-1">
          <aside className="container col-12 col-md-8 col-md-4 mb-3 me-auto text-dark">
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
         <CartProvider>
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
         </CartProvider>
        </main>
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
