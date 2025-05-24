import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { cart } = useCart();
  const { logout } = useAuth();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-laptop-code me-2"></i>
          CasualStore
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Productos</Link>
            </li>
          </ul>
          
          <div className="d-flex align-items-center">
            <div className="text-white me-4">
              <i className="fas fa-user me-2"></i>
              admin
            </div>
            <Link to="/cart" className="btn btn-outline-light position-relative me-3">
              <i className="fas fa-shopping-cart"></i>
              {itemCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {itemCount}
                </span>
              )}
            </Link>
            <button 
              onClick={logout} 
              className="btn btn-outline-light"
            >
              <i className="fas fa-sign-out-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;