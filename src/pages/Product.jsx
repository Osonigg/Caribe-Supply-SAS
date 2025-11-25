import React from "react";

function Product() {
  return (
    <>
      <h1>Producto</h1>
      <article>
        <div>
        <img className="" src="" alt="" />
        
        </div>

        <div className="btnGroup-cart">
          <button type="button"  class="btn btn-warning me-2">
            agregar a carrito
            </button>
          <button type="button" class="btn btn-warning">
            comprar
          </button>
        </div>
      </article>
    </>
  );
}

export default Product;
