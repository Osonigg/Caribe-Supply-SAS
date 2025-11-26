import logo from "./logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navigation />
      </header>
 
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
          {/* Puedes añadir una ruta para errores 404 */}
          <Route path="*" element={<h2>404 Página no encontrada</h2>} />
        </Routes>
      </main>

      <footer>
        {/* ... pie de pagina ...*/}
        <p>caribesupply.sas© 2025 Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
