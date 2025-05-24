import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Toast } from 'bootstrap';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const showSuccessToast = () => {
    const toastElement = document.createElement('div');
    toastElement.className = 'toast position-fixed top-0 start-50 translate-middle-x mt-4';
    toastElement.setAttribute('role', 'alert');
    toastElement.innerHTML = `
      <div class="toast-body bg-success text-white">
        Inicio de sesión correcto
      </div>
    `;
    document.body.appendChild(toastElement);
    const toast = new Toast(toastElement);
    toast.show();
    setTimeout(() => {
      toast.hide();
      toastElement.remove();
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      showSuccessToast();
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body p-5">
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Usuario</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <button type="submit" className="btn btn-primary w-100 mt-4">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;