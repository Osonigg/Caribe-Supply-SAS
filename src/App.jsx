import logo from './logo.png';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Catalogo from './pages/Catologo';
import About from './pages/About';
import Contact from './pages/Contact';
import CarBasket from './pages/CarBasket';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Navigation />
        </header>
  
        {/* Las Rutas definen qué componente se muestra según la URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/carbasket" element={<CarBasket />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* Puedes añadir una ruta para errores 404 */}
          <Route path="*" element={<h2>404 Página no encontrada</h2>} />
        </Routes>

        <footer>{/* ... pie de pagina ...*/}
          <p>caribesupply.sas© 2025 Todos los derechos reservados.</p>
        </footer>
      </div>

  );
}

export default App;
