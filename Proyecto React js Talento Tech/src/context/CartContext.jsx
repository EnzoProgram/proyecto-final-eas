import { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Hook personalizado para acceder al contexto
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  // Intentar cargar el estado del carrito desde localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  // Guardar el carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  // Agregar producto al carrito
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
      // Si existe, incrementar la cantidad
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      // Si no existe, agregarlo con cantidad 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  
  // Eliminar producto del carrito
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };
  
  // Actualizar cantidad de un producto
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      ));
    }
  };
  
  // Limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };
  
  // Calcular total de items en el carrito
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  // Calcular precio total del carrito
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Valores y funciones que expondrá el contexto
  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    itemCount,
    total
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;