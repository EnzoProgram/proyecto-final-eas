import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">TechStore</h3>
            <p className="text-sm text-gray-300">La mejor tienda de tecnología online</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-2">Enlaces</h4>
            <ul className="text-sm text-gray-300">
              <li className="mb-1">Términos y condiciones</li>
              <li className="mb-1">Política de privacidad</li>
              <li className="mb-1">FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-2">Contacto</h4>
            <p className="text-sm text-gray-300">info@techstore.com</p>
            <p className="text-sm text-gray-300">+1 234 567 890</p>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TechStore. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;