import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Product({product}) {
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
            
            {/* Verifica si 'product.price' existe antes de usar toFixed() */}
            {product.price ? (
              <p className="product-price">RD$ {product.price.toFixed(2)}</p>
            ) : (
              <p className="product-price">Precio no disponible</p>
            )}

            <div className="container-fluid justify-content-center aling-items-center" id="comprar">
            <Link to="/carbasket" class="btn btn-outline-warning mb-3 d-block mx-auto">
              Agregar al carrito
            </Link>
            <Link to="/checkout" class="btn btn-outline-warning mb-3 d-block mx-auto">
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
