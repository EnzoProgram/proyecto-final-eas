import React from 'react';
import ProductList from '../components/Products/ProductList';
import Loading from '../components/UI/Loading';
import { useCart } from '../context/CartContext';
import useProducts from '../hooks/useProducts';

function Home() {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Bienvenido a TechStore</h1>
        <p className="text-gray-600">Encuentra los mejores productos al mejor precio</p>
      </div>

      <h2 className="text-2xl font-bold mb-6">Productos Destacados</h2>
      
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      ) : (
        <ProductList products={products} addToCart={addToCart} />
      )}
    </div>
  );
}

export default Home;