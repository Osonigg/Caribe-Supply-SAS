import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
// 🚨 ATENCIÓN: Asegura que la ruta de importación sea correcta.
// Si tu Context está en 'src/CartContext.jsx', la ruta debería ser correcta:
import { useCart } from "../CartContext"; 

function Product({product}) {
  // 🚀 OBTENER la función addToCart del contexto
  const {addToCart} = useCart();
  
  // Función que se ejecuta al hacer clic
  const handleAddToCart = () => {
    addToCart(product);
    // 💡 Opcional: Muestra una notificación o puedes usar useNavigate() 
    // de react-router-dom si quieres que la página cambie automáticamente.
    alert(`${product.name} agregado al carrito!`); 
  };
  
  return (
    <>
      <article className="col-12 col-md-4 mb-3 me-auto">
        <div className="container-fluid">
          <div className="card-img-wrapper object-fit-cover "> 
            <img className="card-img-top img-fluid" src={product.image} alt={product.name} />
          </div>
          <div className="card-body mx-auto">
            <h4 className="card-title mb-3">{product.name}</h4>
            <p className="card-text">{product.description}</p>
            
            {product.price ? (
              <p className="product-price">RD$ {product.price.toFixed(2)}</p>
            ) : (
              <p className="product-price">Precio no disponible</p>
            )}

            <div className="container-fluid justify-content-center aling-items-center" id="comprar">
              {/* 🚀 SOLUCIÓN CLAVE: Reemplazo el <Link> por un <button> y llamo a handleAddToCart */}
              <button 
                onClick={handleAddToCart}
                className="btn btn-outline-warning mb-3 d-block mx-auto"
              >
                Agregar al carrito
              </button>
            
              <Link to="/checkout" className="btn btn-outline-warning mb-3 d-block mx-auto">
                Comprar
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Product;