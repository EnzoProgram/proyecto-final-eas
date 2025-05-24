import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
      <p className="text-gray-600 mb-8">La página que estás buscando no existe.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
