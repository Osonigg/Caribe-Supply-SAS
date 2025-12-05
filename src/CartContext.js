// CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

// 1. CREACIÓN DEL CONTEXTO
const CartContext = createContext();

// 2. HOOK PERSONALIZADO
export const useCart = () => {
  return useContext(CartContext);
};

// 3. PROVEEDOR DEL ESTADO
export const CartProvider = ({ children }) => {
  // Estado real del carrito
  const [cartItems, setCartItems] = useState([]);

  // LÓGICA DE MANIPULACIÓN
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    const quantity = parseInt(newQuantity); 
    
    if (quantity <= 0 || isNaN(quantity)) {
        removeItem(id);
        return;
    }
    
    setCartItems(prevItems => prevItems.map(item => 
        item.id === id ? { ...item, quantity: quantity } : item
    ));
  };

  // VALORES EXPORTADOS
  const contextValue = {
    cartItems, 
    addToCart, 
    removeItem, 
    updateQuantity,
    totalItems: cartItems.reduce((acc, item) => acc + item.quantity, 0),
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};