import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold mb-4">Bienvenido a CasualStore</h1>
              <p className="lead mb-4">Descubre la mejor selección de productos tecnológicos al mejor precio. Calidad y garantía asegurada en cada compra.</p>
              <Link to="/products" className="btn btn-light btn-lg">
                Ver Productos
                <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="fas fa-shipping-fast fa-3x text-primary mb-3"></i>
                <h3 className="card-title h5">Envío Gratis</h3>
                <p className="card-text">En todos tus pedidos superiores a $100</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="fas fa-shield-alt fa-3x text-primary mb-3"></i>
                <h3 className="card-title h5">Garantía Asegurada</h3>
                <p className="card-text">12 meses de garantía en todos los productos</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="fas fa-headset fa-3x text-primary mb-3"></i>
                <h3 className="card-title h5">Soporte 24/7</h3>
                <p className="card-text">Atención al cliente disponible todo el día</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">¿Listo para comenzar?</h2>
          <p className="lead mb-4">Explora nuestra colección de productos tecnológicos</p>
          <Link to="/products" className="btn btn-primary btn-lg">
            Ver Catálogo
            <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;