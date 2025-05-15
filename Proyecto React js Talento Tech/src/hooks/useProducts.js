import { useState, useEffect } from 'react';
import { getProducts } from '../services/api';

// Hook personalizado para obtener productos
function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        
        // Transformar datos para asegurar consistencia
        const formattedProducts = data.map(product => ({
          id: product.id,
          name: product.title,
          price: product.price,
          description: product.description,
          category: product.category,
          image: product.image
        }));
        
        setProducts(formattedProducts);
        setError(null);
      } catch (err) {
        setError('Error al cargar los productos. Por favor, intenta de nuevo más tarde.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}

export default useProducts;