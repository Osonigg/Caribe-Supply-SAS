import React from "react"; // Ya no se necesita useState
import { Link } from "react-router-dom";
// 🚀 Importar el hook useCart
import { useCart } from "../CartContext"; 
// Ya no necesitamos productsData

// ⚠️ NOTA: Asumo que el nombre real del componente es CarBasket
function CarBasket() {
    // 🚀 OBTENER ESTADO Y FUNCIONES DEL CONTEXTO GLOBAL
    const { cartItems, removeItem, updateQuantity } = useCart();
    
    // Lógica de cálculo del total (permanece igual)
    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const totalSinImpuestos = calculateTotal();
    const ITBIS = totalSinImpuestos * 0.18; 
    const totalConImpuestos = totalSinImpuestos + ITBIS;

    // 💡 Las funciones removeItem y updateQuantity ahora usan la versión del Contexto

    return (
        <div className="container my-5">
            <h2 className="text-center mb-5 fw-bold text-secundary">Su carrito de compra</h2>
            <hr />

            {/* Condición para Carrito Vacío: Ahora lee cartItems del Contexto */}
            {cartItems.length === 0 ? (
                <div className="alert alert-info text-center p-4 shadow-sm">
                    El carrito está vacío. ¡Es momento de llenarlo! <Link to="/" className="alert-link fw-bold">Ver Catálogo</Link>
                </div>
            ) : (
                <div className="row">
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
                                        
                                        <div className="d-flex align-items-center me-3 mb-2 mb-md-0">
                                            <label className="me-2 text-nowrap">Cantidad:</label>
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                // Llama a la función del Contexto
                                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                                min="1"
                                                style={{ width: '60px' }}
                                                className="form-control form-control-sm text-center"
                                            />
                                        </div>
                                        
                                        <div className="text-end me-3 mb-2 mb-md-0">
                                            <span className="fw-bold d-block text-success">
                                                RD$ {(item.price * item.quantity).toFixed(2)}
                                            </span>
                                            <small className="text-muted">RD$ {item.price.toFixed(2)} c/u</small>
                                        </div>

                                        <button 
                                            // Llama a la función del Contexto
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
                    
                    {/* Columna de Resumen del Pedido (igual) */}
                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <div className="card p-4 shadow-lg sticky-top">
                            <h4 className="card-title text-center text-secundary mb-4">Total del Pedido</h4>
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
                            
                            <Link to="/checkout" className="btn btn-success d-block py-2 fw-bold text-uppercase mb-2">
                                Finalizar Compra
                            </Link>
                            
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

export default CarBasket;