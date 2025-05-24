import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card h-100">
      <img 
        src={product.image} 
        className="card-img-top p-3" 
        alt={product.name}
        style={{ height: '200px', objectFit: 'contain' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate">{product.name}</h5>
        <p className="card-text text-truncate">{product.description}</p>
        <div className="mt-auto">
          <p className="h4 text-primary mb-3">${product.price.toFixed(2)}</p>
          <div className="d-grid gap-2">
            <button 
              onClick={() => addToCart(product)}
              className="btn btn-primary"
            >
              <i className="fas fa-cart-plus me-2"></i>
              Agregar al carrito
            </button>
            <Link 
              to={`/product/${product.id}`} 
              className="btn btn-outline-secondary"
            >
              Ver detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;