import React from 'react';
import CartItem from './CartItem';

function Cart({ cart, removeFromCart, updateQuantity }) {
  // Calcular el total del carrito
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {cart.length === 0 ? (
        <p className="text-gray-500 text-center py-4">Tu carrito está vacío</p>
      ) : (
        <>
          <div className="space-y-4 mb-4">
            {cart.map(item => (
              <CartItem 
                key={item.id} 
                item={item} 
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            ))}
          </div>
          
          <div className="border-t pt-4">
            <div className="flex justify-between font-semibold mb-4">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            <button 
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors w-full"
            >
              Proceder al pago
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;