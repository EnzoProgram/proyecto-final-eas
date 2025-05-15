import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain p-4"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-3">{product.description}</p>
        <div className="mt-auto">
          <p className="text-blue-600 font-bold text-lg mb-4">${product.price.toFixed(2)}</p>
          <button 
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors w-full"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;