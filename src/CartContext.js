import React, { createContext, useState, useContext } from 'react';

// 1. CREACIÓN DEL CONTEXTO: Define la estructura del estado global
const CartContext = createContext();

// 2. HOOK PERSONALIZADO: Permite a cualquier componente acceder al estado y acciones
export const useCart = () => {
  return useContext(CartContext);
};

// 3. PROVEEDOR DEL ESTADO: Contiene la lógica y el estado real
export const CartProvider = ({ children }) => {
  // Estado inicial del carrito: un array vacío
  const [cartItems, setCartItems] = useState([]);

  // =========================================================
  // LÓGICA DE MANIPULACIÓN DEL CARRITO
  // =========================================================

  /**
   * Agrega un producto al carrito. Si ya existe, incrementa su cantidad.
   * @param {object} product - El objeto del producto a agregar (debe tener un 'id').
   */
  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Intenta encontrar si el producto ya existe en el carrito
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        // 1. Si existe: Mapea la lista e incrementa la cantidad del producto encontrado
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // 2. Si no existe: Agrega el nuevo producto con cantidad inicial de 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  /**
   * Elimina completamente un artículo del carrito usando su ID.
   * @param {string | number} id - El ID del producto a eliminar.
   */
  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  /**
   * Actualiza la cantidad de un producto específico. 
   * Si la cantidad es 0 o menos, elimina el producto.
   * @param {string | number} id - El ID del producto a modificar.
   * @param {number} newQuantity - La nueva cantidad del producto.
   */
  const updateQuantity = (id, newQuantity) => {
    // Asegura que el valor sea un número entero
    const quantity = parseInt(newQuantity); 
    
    // Si la cantidad es inválida o cero, llama a removeItem
    if (quantity <= 0 || isNaN(quantity)) {
        removeItem(id);
        return;
    }
    
    setCartItems(prevItems => prevItems.map(item => 
        // Encuentra el artículo y actualiza solo la cantidad
        item.id === id ? { ...item, quantity: quantity } : item
    ));
  };

  // =========================================================
  // VALORES EXPORTADOS
  // =========================================================

  // Objeto que contiene todos los datos y funciones que se comparten
  const contextValue = {
    cartItems,        // Lista de productos en el carrito (Lectura)
    addToCart,        // Función para agregar/incrementar productos (Acción)
    removeItem,       // Función para eliminar un producto (Acción)
    updateQuantity,   // Función para cambiar la cantidad (Acción)
    // Opcional: puedes añadir más valores, como un contador total de artículos o el total a pagar.
    totalItems: cartItems.reduce((acc, item) => acc + item.quantity, 0),
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};