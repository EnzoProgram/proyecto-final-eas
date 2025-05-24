import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="container py-5">
      <h2 className="mb-4">Tu Carrito de Compras</h2>
      
      {cart.length === 0 ? (
        <div className="text-center py-5">
          <i className="fas fa-shopping-cart fa-4x text-muted mb-4"></i>
          <h3 className="text-muted">Tu carrito está vacío</h3>
          <p className="mb-4">¡Agrega algunos productos para comenzar!</p>
          <button 
            onClick={() => navigate('/')}
            className="btn btn-primary btn-lg"
          >
            Continuar Comprando
          </button>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body">
                {cart.map(item => (
                  <div key={item.id} className="row mb-4 align-items-center">
                    <div className="col-md-2">
                      <img src={item.image} alt={item.name} className="img-fluid rounded" />
                    </div>
                    <div className="col-md-4">
                      <h5 className="text-truncate">{item.name}</h5>
                      <p className="text-muted mb-0">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="col-md-3">
                      <div className="input-group">
                        <button 
                          className="btn btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                        <input 
                          type="number" 
                          className="form-control text-center"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                        />
                        <button 
                          className="btn btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-2 text-end">
                      <h6>${(item.price * item.quantity).toFixed(2)}</h6>
                    </div>
                    <div className="col-md-1">
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="btn btn-link text-danger"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-4">Resumen de Compra</h5>
                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Envío</span>
                  <span>Gratis</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <strong>Total</strong>
                  <strong>${total.toFixed(2)}</strong>
                </div>
                <button 
                  onClick={() => navigate('/checkout')}
                  className="btn btn-primary w-100 mb-3"
                >
                  Proceder al Pago
                </button>
                <button 
                  onClick={() => navigate('/')}
                  className="btn btn-outline-secondary w-100"
                >
                  Seguir Comprando
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;