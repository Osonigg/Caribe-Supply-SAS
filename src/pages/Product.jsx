import React from "react";
import { Link } from "react-router-dom";

function Product() {
  return (
    <>
      <article class="container mb-3 w-50">
        <div class="card" width="150px">
          <img class="card-img-top" src="" alt="Card image" />
          <div class="card-body">
            <h4 class="card-title">John Doe</h4>
            <p class="card-text">Some example text.</p>
            <a href="/carbasket" class="btn btn-outline-warning mb-3 d-block w-50 mx-auto">
              Agregar al carrito
            </a>
            <a href="/carbasket" class="btn btn-outline-warning mb-3 d-block w-50 mx-auto">
              Comprar
            </a>
          </div>
        </div>
      </article>
    </>
  );
}

export default Product;
