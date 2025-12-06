import React, { useState } from "react";
import { useCart } from "../CartContext"; 
import { Link } from "react-router-dom";

// Datos de Provincias y Estados
const dominicanProvinces = [
    "Azua", "Baoruco", "Barahona", "Dajabón", "Distrito Nacional", "Duarte",
    "Elías Piña", "El Seibo", "Espaillat", "Hato Mayor", "Hermanas Mirabal",
    "Independencia", "La Altagracia", "La Romana", "La Vega", "María Trinidad Sánchez",
    "Monseñor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia",
    "Puerto Plata", "Samaná", "San Cristóbal", "San José de Ocoa", "San Juan",
    "San Pedro de Macorís", "Sánchez Ramírez", "Santiago", "Santiago Rodríguez",
    "Santo Domingo", "Valverde"
];

// Solo algunos estados de EE. UU. a modo de ejemplo
const usStates = [
    "Alabama", "Alaska", "California", "Florida", "Georgia", "New York", 
    "Ohio", "Texas", "Virginia", "Washington", "Wyoming"
];


function Checkout() {
    const { cartItems, clearCart } = useCart();
    
    // Estados para la lógica del pedido
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);
    const [shippingNumber, setShippingNumber] = useState('');

    // 🚀 ESTADOS PARA LOS CAMPOS PAÍS/PROVINCIA
    const [country, setCountry] = useState('');
    const [provinceState, setProvinceState] = useState('');

    // Lógica de cálculo del total (mantenida)
    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const totalSinImpuestos = calculateTotal();
    const ITBIS = totalSinImpuestos * 0.18;
    const totalConImpuestos = totalSinImpuestos + ITBIS;
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    // Función para determinar qué lista de regiones mostrar
    const getRegions = () => {
        if (country === 'Republica Dominicana') {
            return dominicanProvinces;
        }
        if (country === 'Estados Unidos') {
            return usStates;
        }
        return [];
    };
    
    // Función para manejar el cambio de país
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
        // Resetear la provincia/estado al cambiar de país
        setProvinceState(''); 
    };
    
    // Función para generar un número de envío simple
    const generateShippingNumber = () => {
        const date = new Date();
        const year = date.getFullYear().toString().slice(-2);
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const random = Math.floor(1000 + Math.random() * 9000); 
        return `RD${year}${month}${day}${random}`;
    };

    // Función de manejo de envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validaciones de Bootstrap / React
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            form.classList.add('was-validated');
            alert("Por favor complete todos los campos requeridos del formulario.");
            return;
        }
        
        // Simular éxito de la orden
        const newShippingNumber = generateShippingNumber();
        
        clearCart(); 
        setShippingNumber(newShippingNumber);
        setIsOrderPlaced(true); 
    };
    
    // Renderizado condicional del mensaje de éxito
    if (isOrderPlaced) {
        return (
            <div className="container my-5 text-center">
                <div className="alert alert-success p-5 shadow-lg">
                    <h1 className="display-4 text-success mb-4">¡Compra Completada con Éxito! 🎉</h1>
                    <p className="lead">
                        Gracias por tu compra. Tu pedido ha sido procesado correctamente.
                    </p>
                    <hr />
                    <h3 className="mb-3">
                        Número de Tracking: <span className="text-primary fw-bold">{shippingNumber}</span>
                    </h3>
                    <p className="text-dark fw-medium">
                        📧 **Confirmación por Email:** Recibirás un correo electrónico con el **código de shipping**, tu factura y un enlace de rastreo detallado del pedido en las próximas horas.
                    </p>
                    <Link to="/" className="btn btn-success mt-4 btn-lg">
                        Volver al inicio
                    </Link>
                </div>
            </div>
        );
    }
    
    // Si el carrito está vacío (antes de la compra)
    if (cartItems.length === 0) {
        return (
             <div className="container my-5 text-center">
                <div className="alert alert-warning p-4 shadow-sm">
                    El carrito está vacío. <Link to="/" className="alert-link fw-bold">Volver al Catálogo</Link>
                </div>
            </div>
        )
    }


    // Renderizado del Formulario de Checkout
    return (
        <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
                {/* Columna del Carrito / Resumen de Compra (Mantenida) */}
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-secondary">¡Su carrito está listo!</span>
                    <span className="badge bg-primary rounded-pill">{totalItems}</span>
                </h4>
                
                <ul className="list-group mb-3">
                    {cartItems.map(item => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0">{item.name}</h6>
                                <small className="text-body-secondary">
                                    Cantidad: {item.quantity} x RD$ {item.price.toFixed(2)}
                                </small>
                            </div>
                            <span className="text-body-secondary fw-bold">
                                RD$ {(item.price * item.quantity).toFixed(2)}
                            </span>
                        </li>
                    ))}
                    
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Subtotal (sin ITBIS)</span>
                        <strong>RD$ {totalSinImpuestos.toFixed(2)}</strong>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>ITBIS (18%)</span>
                        <strong>RD$ {ITBIS.toFixed(2)}</strong>
                    </li>

                    <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                        <div className="text-success">
                            <h6 className="my-0">Código de promoción</h6>
                            <small>EXAMPLECODE</small>
                        </div>
                        <span className="text-success">−$5.00</span> 
                    </li>

                    <li className="list-group-item d-flex justify-content-between fw-bold text-success fs-5">
                        <span>Total a Pagar (RD$)</span>
                        <strong>RD$ {totalConImpuestos.toFixed(2)}</strong>
                    </li>
                </ul>

                <form className="card p-2">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Código de promoción" />
                        <button type="submit" className="btn btn-secondary">
                            Canjear
                        </button>
                    </div>
                </form>
            </div>

            {/* Columna de Dirección y Pago */}
            <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Dirección de envío</h4>
                <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                    
                    {/* INICIO: GRUPO DE CAMPOS VERTICALES */}
                    {/* Nombre */}
                    <div className="mb-3"> 
                        <label htmlFor="firstName" className="form-label">
                            Nombre
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder=""
                            defaultValue=""
                            required
                        />
                        <div className="invalid-feedback">Se necesita un nombre.</div>
                    </div>
                    
                    {/* Apellido */}
                    <div className="mb-3"> 
                        <label htmlFor="lastName" className="form-label">
                            Apellido
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder=""
                            defaultValue=""
                            required
                        />
                        <div className="invalid-feedback">Se necesita un apellido.</div>
                    </div>
                    
                    {/* Usuario */}
                    <div className="mb-3"> 
                        <label htmlFor="username" className="form-label">
                            Crear nombre de usuario
                        </label>
                        <div className="input-group has-validation">
                            <span className="input-group-text">@</span>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Usuario"
                                required
                            />
                            <div className="invalid-feedback">Se necesita un nombre de usuario.</div>
                        </div>
                    </div>
                    
                    {/* Email */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                            <span className="text-body-secondary"> (Opcional)</span>
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="sucorreo@gmail.com"
                        />
                        <div className="invalid-feedback">
                            Por favor agregue un correo para las actualizaciones de envío.
                        </div>
                    </div>
                    
                    {/* Dirección 1 */}
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                            Dirección
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Coloque la direccion "
                            required
                        />
                        <div className="invalid-feedback">
                            Por favor agregue su dirección.
                        </div>
                    </div>
                    
                    {/* Dirección 2 (Opcional) */}
                    <div className="mb-3">
                        <label htmlFor="address2" className="form-label">
                            Dirección 2<span className="text-body-secondary"> (opcional)</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="address2"
                            placeholder="Agregue direccion o apartamento"
                        />
                    </div>
                    
                    {/* Contenedor de País/Provincia/Zip (usamos un row anidado para mantenerlos alineados) */}
                    <div className="row g-3 mb-3"> 
                        
                        {/* País (Controlado) */}
                        <div className="col-md-5">
                            <label htmlFor="country" className="form-label">
                                País
                            </label>
                            <select 
                                className="form-select" 
                                id="country" 
                                required
                                value={country}
                                onChange={handleCountryChange}
                            >
                                <option value="">Elegir...</option>
                                <option value="Republica Dominicana">Republica Dominicana</option>
                                <option value="Estados Unidos">Estados Unidos</option>
                            </select>
                            <div className="invalid-feedback">Seleccione un país disponible.</div>
                        </div>
                        
                        {/* Provincia/Estado (Dinámico) */}
                        <div className="col-md-4">
                            <label htmlFor="state" className="form-label">
                                {/* Cambia la etiqueta dinámicamente */}
                                {country === 'Republica Dominicana' ? 'Provincia' : 'Estado'}
                            </label>
                            <select 
                                className="form-select" 
                                id="state" 
                                required
                                value={provinceState}
                                onChange={(e) => setProvinceState(e.target.value)}
                                disabled={!country} // Deshabilitado si no hay país seleccionado
                            >
                                <option value="">
                                    {country ? 'Seleccione una región...' : 'Seleccione un país primero'}
                                </option>
                                {/* Mapear las regiones según el país seleccionado */}
                                {getRegions().map(region => (
                                    <option key={region} value={region}>
                                        {region}
                                    </option>
                                ))}
                            </select>
                            <div className="invalid-feedback">
                                Por favor seleccione una {country === 'Republica Dominicana' ? 'provincia' : 'estado'}.
                            </div>
                        </div>
                        
                        {/* Zip */}
                        <div className="col-md-3">
                            <label htmlFor="zip" className="form-label">
                                Zip
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="zip"
                                placeholder=""
                                required
                            />
                            <div className="invalid-feedback">Coloque la provincia.</div>
                        </div>
                    </div>
                    {/* FIN: GRUPO DE CAMPOS VERTICALES */}

                    <hr className="my-4" />
                    
                    {/* SECCIÓN DE PAGO (Mantenida) */}
                    <h4 className="mb-3">Pago</h4>
                    
                    <div className="my-3">
                        <div className="form-check">
                            <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required/>
                            <label className="form-check-label" htmlFor="credit">Tarjeta de crédito</label>
                        </div>
                        <div className="form-check">
                            <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required/>
                            <label className="form-check-label" htmlFor="debit">Tarjeta de débito</label>
                        </div>
                        <div className="form-check">
                            <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required/>
                            <label className="form-check-label" htmlFor="paypal">PayPal</label>
                        </div>
                    </div>
                    
                    <div className="row gy-3">
                        <div className="col-md-6">
                            <label htmlFor="cc-name" className="form-label">Nombre en la tarjeta</label>
                            <input type="text" className="form-control" id="cc-name" placeholder="" required/>
                            <small className="text-body-secondary">Coloque el nombre completo en la tarjeta.</small>
                            <div className="invalid-feedback">Coloque el nombre de la tarjeta.</div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="cc-number" className="form-label">Número de tarjeta</label>
                            <input type="text" className="form-control" id="cc-number" placeholder="" required/>
                            <div className="invalid-feedback">Coloque el número.</div>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="cc-expiration" className="form-label">Expiración</label>
                            <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
                            <div className="invalid-feedback">Expiración es requerido.</div>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="cc-cvv" className="form-label">CVV</label>
                            <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
                            <div className="invalid-feedback">Agrega el CVV correcto.</div>
                        </div>
                    </div>

                    <hr className="my-4" />
                    <button className="w-100 btn btn-primary btn-lg" type="submit">
                        Continuar con la compra
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Checkout;