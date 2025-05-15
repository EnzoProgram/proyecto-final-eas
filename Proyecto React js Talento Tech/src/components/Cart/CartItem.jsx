import React from 'react';

function CartItem({ item, removeFromCart, updateQuantity }) {
  return (
    <div className="flex items-center py-2 border-b last:border-b-0">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-16 h-16 object-contain rounded"
      />
      
      <div className="ml-4 flex-grow">
        <h4 className="font-medium line-clamp-1">{item.name}</h4>
        <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center">
        <div className="flex items-center border rounded mr-2">
          <button 
            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
          <span className="px-2">{item.quantity}</span>
          <button 
            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        
        <button 
          className="text-red-500 hover:text-red-700"
          onClick={() => removeFromCart(item.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
