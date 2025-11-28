
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <aside class="d-flex col-lg-6 mb-2 alings-item-center justify-content-center">api bolsa</aside>
        <Navigation />
      </header>

      {/* anuncios */}

      <div class="main-content">
        <aside class="col4">anuncios
          <div class="d-flex mb-1 p-2 pb-3 text-shadow-1 border"> 
            <h3 >Another longer title belongs here</h3> 
            <ul class="d-flex list-unstyled mt-auto"> 
              <li class="d-flex align-items-center me-3"> 
                 <small>California</small> 
              </li> 
            </ul> 
          </div>

          <div class="d-flex mb-1 p-2 pb-3 text-shadow-1 border"> 
            <h3 >Another longer title belongs here</h3> 
            <ul class="d-flex list-unstyled mt-auto"> 
              <li class="d-flex align-items-center me-3"> 
                 <small>California</small> 
              </li> 
            </ul> 
          </div>

          <div class="d-flex p-2 pb-3 text-shadow-1 border"> 
            <h3 >Another longer title belongs here</h3> 
            <ul class="d-flex list-unstyled mt-auto"> 
              <li class="d-flex align-items-center me-3"> 
                 <small>California</small> 
              </li> 
            </ul> 
          </div>
          
        </aside>
        <main>
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
            {/* Puedes añadir una ruta para errores 404 */}
            <Route path="*" element={<h2>404 Página no encontrada</h2>} />
          </Routes>
        </main>
      </div>
     
      <footer class="my-2">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-white">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-white">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a href="/policy" class="nav-link px-2 text-body-white">
              Policy 
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-white">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-white">
              About
            </a>
          </li>
        </ul>
        <p class="text-center text-body-white">© 2025 caribesupply.sas, Todos los derechos reservados.</p>{" "}
      </footer>
    </div>
  );
}

export default App;
