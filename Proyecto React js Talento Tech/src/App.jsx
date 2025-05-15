import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import ProductList from './components/Products/ProductList';
import Cart from './components/Cart/Cart';
import Loading from './components/UI/Loading';
import useProducts from './hooks/useProducts';

function App() {
  // Estado para el carrito de compras
  const [cart, setCart] = useState([]);
  
  // Obtenemos los productos desde la API usando nuestro hook personalizado
  const { products, loading, error } = useProducts();

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    // Verificar si el producto ya está en el carrito
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

  // Función para eliminar productos del carrito
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Función para cambiar la cantidad de un producto
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

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <h1 className="text-2xl font-bold mb-6">Productos Disponibles</h1>
            
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
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Tu Carrito</h2>
            <Cart 
              cart={cart} 
              removeFromCart={removeFromCart} 
              updateQuantity={updateQuantity} 
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;