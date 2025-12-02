import React from "react";

function Product({product}) {
  return (
    <>
      <article class="col-12 col-md-4 mb-3">
        <div class="card">
          <img class="card-img-top" src={product.image} alt={product.name} />
          <div class="card-body">
            <h4 class="card-title">{product.name}</h4>
            <p class="card-text">{product.description}</p>
            {/* SOLUCIÓN: Verifica si 'product.price' existe antes de usar toFixed() */}
            {product.price ? (
              <p className="product-price">RD$ {product.price.toFixed(2)}</p>
            ) : (
              <p className="product-price">Precio no disponible</p>
            )}
            <a href="/carbasket" class="btn btn-outline-warning mb-3 d-block mx-auto">
              Agregar al carrito
            </a>
            <a href="/carbasket" class="btn btn-outline-warning mb-3 d-block mx-auto">
              Comprar
            </a>
          </div>
        </div>
      </article>
    </>
  );
}

export default Product;
