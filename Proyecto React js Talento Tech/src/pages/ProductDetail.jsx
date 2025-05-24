import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import { useCart } from '../context/CartContext';
import Loading from '../components/UI/Loading';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id);
        setProduct({
          id: data.id,
          name: data.title,
          price: data.price,
          description: data.description,
          category: data.category,
          image: data.image
        });
      } catch (err) {
        setError('Error al cargar el producto');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return (
    <div className="container py-5 text-center">
      <Loading />
    </div>
  );

  if (error) return (
    <div className="container py-5">
      <div className="alert alert-danger" role="alert">{error}</div>
    </div>
  );

  if (!product) return (
    <div className="container py-5">
      <div className="alert alert-warning" role="alert">Producto no encontrado</div>
    </div>
  );

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
          <li className="breadcrumb-item"><Link to="/products">Productos</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
        </ol>
      </nav>

      <div className="card border-0 shadow-sm">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="p-4 d-flex align-items-center justify-content-center" style={{ height: '400px' }}>
              <img 
                src={product.image} 
                alt={product.name} 
                className="img-fluid" 
                style={{ maxHeight: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-body p-4">
              <h1 className="card-title h2 mb-4">{product.name}</h1>
              <p className="card-text text-muted mb-4">{product.description}</p>
              
              <div className="mb-4">
                <span className="badge bg-secondary me-2">{product.category}</span>
                <h3 className="text-primary d-inline-block mb-0">${product.price.toFixed(2)}</h3>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="btn btn-primary btn-lg w-100"
              >
                <i className="fas fa-cart-plus me-2"></i>
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;