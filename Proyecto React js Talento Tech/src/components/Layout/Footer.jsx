import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Columna 1 - Sobre Nosotros */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-uppercase mb-4">CasualStore</h5>
            <p className="mb-3">Tu tienda de confianza desde 2010. Ofrecemos los mejores productos con garantía y servicio especializado.</p>
            <div className="social-icons">
              <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Columna 2 - Enlaces Rápidos */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-uppercase mb-4">Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Inicio</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Productos</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Ofertas</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Soporte</a></li>
            </ul>
          </div>

          {/* Columna 3 - Contacto */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-uppercase mb-4">Contacto</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><i className="fas fa-home me-3"></i> Av. Tecnología 123, CABA</li>
              <li className="mb-2"><i className="fas fa-envelope me-3"></i> info@casualstore.com</li>
              <li className="mb-2"><i className="fas fa-phone me-3"></i> +54 11 4567-8900</li>
              <li className="mb-2"><i className="fas fa-print me-3"></i> +54 11 4567-8901</li>
            </ul>
          </div>

          {/* Columna 4 - Newsletter */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-uppercase mb-4">Newsletter</h5>
            <p className="mb-3">Suscríbete para recibir nuestras ofertas</p>
            <div className="form-outline form-white mb-4">
              <input type="email" className="form-control" placeholder="Tu email" />
              <button className="btn btn-outline-light mt-2 w-100">Suscribirse</button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-4 mt-4 border-top">
          <p className="mb-0">© 2024 CasualStore. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;