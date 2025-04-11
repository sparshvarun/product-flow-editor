
import React from 'react';
import './ProductList.css';

const ProductList = ({ products, onSelect }) => {
  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div 
            key={product.id}
            className="product-card"
            onClick={() => onSelect(product)}
          >
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              className="product-image"
            />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <div className="product-rating">
                ⭐ {product.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
