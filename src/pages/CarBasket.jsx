import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";
import productsData from "./productsData";


// ⚠️ DATOS SIMULADOS (MOCK): 
// Estos productos simulan lo que el usuario ha añadido al carrito.
// En tu aplicación final, debes obtener esta lista del estado global de tu aplicación.


function Cart() {
    // 💡 REEMPLAZAR ESTO: Con la lista de artículos de tu estado global de carrito.
    const [cartItems, setCartItems] = useState(productsData.id); 

    

    // 1. Lógica de cálculo del total
    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const totalSinImpuestos = calculateTotal();
    const ITBIS = totalSinImpuestos * 0.18; // 18% de ITBIS (Impuesto sobre Transferencia de Bienes Industrializados y Servicios)
    const totalConImpuestos = totalSinImpuestos + ITBIS;

    // 2. Función para eliminar un artículo
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // 3. Función para ajustar la cantidad (ejemplo básico)
    const updateQuantity = (id, newQuantity) => {
        if (newQuantity <= 0) {
            removeItem(id);
            return;
        }
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-5 fw-bold text-primary">🛒 Su Cesta de Compras</h2>
            <hr />

            {/* Condición para Carrito Vacío */}
            {cartItems.length === 0 ? (
                <div className="alert alert-info text-center p-4 shadow-sm">
                    El carrito está vacío. ¡Es momento de llenarlo! <Link to="/" className="alert-link fw-bold">Ver Catálogo</Link>
                </div>
            ) : (
                <div className="row">
                    {/* Columna de Artículos en el Carrito */}
                    <div className="col-lg-8">
                        <h4 className="mb-3">Artículos Seleccionados ({cartItems.length})</h4>
                        <ul className="list-group shadow-sm">
                            {cartItems.map(item => (
                                <li key={item.id} className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
                                    
                                    <div className="d-flex align-items-center w-50 mb-3 mb-md-0">
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '15px', borderRadius: '5px' }} 
                                        />
                                        <div>
                                            <h5 className="mb-0 text-dark">{item.name}</h5>
                                            <small className="text-muted">ID: {item.id}</small>
                                        </div>
                                    </div>
                                    
                                    <div className="d-flex flex-column flex-md-row align-items-center w-50 justify-content-end">
                                        
                                        {/* Control de Cantidad */}
                                        <div className="d-flex align-items-center me-3 mb-2 mb-md-0">
                                            <label className="me-2 text-nowrap">Cantidad:</label>
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                                min="1"
                                                style={{ width: '60px' }}
                                                className="form-control form-control-sm text-center"
                                            />
                                        </div>
                                        
                                        {/* Precio y Botón de Eliminar */}
                                        <div className="text-end me-3 mb-2 mb-md-0">
                                            <span className="fw-bold d-block text-success">
                                                RD$ {(item.price * item.quantity).toFixed(2)}
                                            </span>
                                            <small className="text-muted">RD$ {item.price.toFixed(2)} c/u</small>
                                        </div>

                                        <button 
                                            onClick={() => removeItem(item.id)} 
                                            className="btn btn-outline-danger btn-sm"
                                            aria-label={`Eliminar ${item.name}`}
                                        >
                                            ❌
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Columna de Resumen del Pedido */}
                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <div className="card p-4 shadow-lg sticky-top">
                            <h4 className="card-title text-center text-primary mb-4">Total del Pedido</h4>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item d-flex justify-content-between px-0">
                                    Subtotal (sin ITBIS):
                                    <span>RD$ {totalSinImpuestos.toFixed(2)}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between px-0">
                                    ITBIS (18%):
                                    <span>RD$ {ITBIS.toFixed(2)}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between px-0 fw-bold text-success fs-5 border-top pt-2">
                                    Total a Pagar:
                                    <span>RD$ {totalConImpuestos.toFixed(2)}</span>
                                </li>
                            </ul>
                            
                            {/* Botón de Finalizar Compra */}
                            <Link to="/checkout" className="btn btn-success d-block py-2 fw-bold text-uppercase mb-2">
                                Finalizar Compra
                            </Link>
                            
                            {/* Botón de Volver al Catálogo (Apunta a la ruta principal '/') */}
                            <Link to="/" className="btn btn-outline-secondary d-block py-2">
                                Volver al Catálogo
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;