import '@xyflow/react/dist/style.css';
import React, { useState, useEffect } from 'react';

import ProductList from './components/ProductList';
import FlowEditor from './components/FlowEditor';
import './App.css';




function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };
  
  fetchProducts();
}, []);



  return (
    <div className="app">
      <h1>Product Flow Editor</h1>
      {loading ? (
        <div>Loading products...</div>
      ) : (
        <div className="app-container">
          <ProductList products={products} onSelect={setSelectedProduct} />
          <FlowEditor selectedProduct={selectedProduct} />
        </div>
      )}
    </div>
  );
}

export default App;

