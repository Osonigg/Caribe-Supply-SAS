import React from "react";

function Checkout() {
  return (
    <div class="row g-5">
        <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-secundary">¡Su carrito está listo! Llene el formulario para el pago.</span>
            <span class="badge bg-primary rounded-pill">3</span>
            </h4>
            <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                <h6 class="my-0">Nombre del producto</h6>
                </div>{" "}
                <span class="text-body-secondary">$12</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                <h6 class="my-0">Second product</h6>
                <small class="text-body-secondary">Brief description</small>
                </div>
                <span class="text-body-secondary">$8</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                <h6 class="my-0">Third item</h6>
                <small class="text-body-secondary">Brief description</small>
                </div>
                <span class="text-body-secondary">$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-body-tertiary">
                <div class="text-success">
                <h6 class="my-0">Codigo de promoción</h6>
                <small>EXAMPLECODE</small>
                </div>
                <span class="text-success">−$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
                <span>Total (RD$)</span>
                <strong>$20</strong>
            </li>
            </ul>

            <form class="card p-2">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Código de promoción" />
                <button type="submit" class="btn btn-secondary">
                Redeem
                </button>
            </div>
            </form>
        </div>

      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Dirección de envío</h4>
        <form class="needs-validation" novalidate="">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">
                Nombre
              </label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder=""
                value=""
                required=""
              />
              <div class="invalid-feedback">Se necesita un nombre.</div>
            </div>
            <div class="col-sm-6">
              <label for="lastName" class="form-label">
                Apellido
              </label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder=""
                value=""
                required=""
              />
              <div class="invalid-feedback">Se necesita un apellido.</div>
            </div>
            <div class="col-12">
              <label for="username" class="form-label">
                Crear nombre de usuario
              </label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Usuario"
                  required=""
                />
                <div class="invalid-feedback">Se necesita un nombre de usuario.</div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <label for="email" class="form-label">
              {" "}
              Email
              <span class="text-body-secondary"></span>
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="sucorreo@gmail.com"
            />
            <div class="invalid-feedback">
              Por favor agregue un correo para las actualizaciones de envío.
            </div>
          </div>
          <div class="col-12">
            {" "}
            <label for="address" class="form-label">
              Dirección
            </label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="Coloque la direccion "
              required=""
            />
            <div class="invalid-feedback">
              Por favor agregue su dirección.
            </div>
          </div>
          <div class="col-12">
            <label for="address2" class="form-label">
              {" "}
              Dirección 2<span class="text-body-secondary"> (opcional)</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="address2"
              placeholder="Agregue direccion o apartamento"
            />
          </div>
          <div class="col-md-5">
            <label for="country" class="form-label">
              País
            </label>
            <select class="form-select" id="country" required="">
              <option value="">Elegir...</option>
              <option>Republica Dominicana</option>
              <option>Estados Unidos</option>
            </select>
            <div class="invalid-feedback">Seleccione un pais disponible.</div>
          </div>
          <div class="col-md-4">
            <label for="state" class="form-label">
              Provincia
            </label>
            <select class="form-select" id="state" required="">
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div class="invalid-feedback">Por favor seleccione una provincia.</div>
          </div>
          <div class="col-md-3">
            <label for="zip" class="form-label">
              Zip
            </label>
            <input
              type="text"
              class="form-control"
              id="zip"
              placeholder=""
              required=""
            />
            <div class="invalid-feedback">Coloque la provincia.</div>
          </div>

          <hr class="my-4" />
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="same-address" />
            <label class="form-check-label" for="same-address">
              La direccion de pago es la misma dirección de paquetería.
            </label>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="save-info" />
            <label class="form-check-label" for="save-info">
              Guardar esta información para una próxima vez.
            </label>
          </div>

          <hr class="my-4" />
          <h4 class="mb-3">Pago</h4>
          <div class="my-3">
            <div class="form-check">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                class="form-check-input"
                checked=""
                required=""
              />
              <label class="form-check-label" for="credit">
                Tarjeta de crédito
              </label>
            </div>
            <div class="form-check">
              <input
                id="debit"
                name="paymentMethod"
                type="radio"
                class="form-check-input"
                required=""
              />
              <label class="form-check-label" for="debit">
                Tarjeta de débito
              </label>
            </div>
            <div class="form-check">
              <input
                id="paypal"
                name="paymentMethod"
                type="radio"
                class="form-check-input"
                required=""
              />
              <label class="form-check-label" for="paypal">
                PayPal
              </label>
            </div>
          </div>
          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">
                Nombre en la tarjeta
              </label>
              <input
                type="text"
                class="form-control"
                id="cc-name"
                placeholder=""
                required=""
              />
              <small class="text-body-secondary">
                Coloque el nombre completo en la tarjeta.
              </small>
              <div class="invalid-feedback">Coloque el nombre de la tarjeta.</div>
            </div>
            <div class="col-md-6">
              <label for="cc-number" class="form-label">
                Numero de tarjeta
              </label>
              <input
                type="text"
                class="form-control"
                id="cc-number"
                placeholder=""
                required=""
              />
              <div class="invalid-feedback">Coloque el numero.</div>
            </div>
            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">
                Expiración
              </label>
              <input
                type="text"
                class="form-control"
                id="cc-expiration"
                placeholder=""
                required=""
              />
              <div class="invalid-feedback">Expiracion es requerido.</div>
            </div>
            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">
                CVV
              </label>
              <input
                type="text"
                class="form-control"
                id="cc-cvv"
                placeholder=""
                required=""
              />
              <div class="invalid-feedback">Agrega el CVV correcto.</div>
            </div>
          </div>

          <hr class="my-4" />
          <button class="w-100 btn btn-primary btn-lg" type="submit">
            Continuar con la compra
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
