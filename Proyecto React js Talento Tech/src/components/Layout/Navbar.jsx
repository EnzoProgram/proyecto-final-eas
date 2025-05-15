import React from 'react';
import { useCart } from '../../context/CartContext';

function Navbar() {
  const { itemCount } = useCart();

  return (
    <nav className="bg-gray-800 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <ul className="flex space-x-6">
            <li className="hover:text-blue-300 cursor-pointer">Inicio</li>
            <li className="hover:text-blue-300 cursor-pointer">Productos</li>
            <li className="hover:text-blue-300 cursor-pointer">Ofertas</li>
            <li className="hover:text-blue-300 cursor-pointer">Contacto</li>
          </ul>
          
          <div className="relative">
            <span className="cursor-pointer flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;