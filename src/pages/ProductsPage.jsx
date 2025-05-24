import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
import { useCart } from '../context/CartContext';

const ProductsPage = () => {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger" role="alert">{error}</div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Nuestros Productos</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map(product => (
          <div key={product.id} className="col">
            <div className="card h-100 shadow-sm">
              <div className="p-3" style={{ height: '200px' }}>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="img-fluid h-100 w-100"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-truncate">{product.title}</h5>
                <p className="card-text text-truncate">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="h5 mb-0">${product.price.toFixed(2)}</span>
                  <div className="d-flex gap-2">
                    <button 
                      onClick={() => addToCart(product)}
                      className="btn btn-success"
                    >
                      <i className="fas fa-cart-plus"></i>
                    </button>
                  <Link to={`/product/${product.id}`} className="btn btn-primary">
                    Ver Detalles
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;