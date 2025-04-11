import React from 'react';
import { Handle, Position } from '@xyflow/react'; 
import './ProductNode.css';

const ProductNode = ({ data }) => {
  const { product } = data;

  return (
    <div className="product-node">
      
      <Handle type="target" position={Position.Top} />
      
      <div className="node-content">
       
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className="node-image"
        />
        <h3>{product.title}</h3>
        <div className="node-details">
          <p>Price: ${product.price}</p>
          <p>Rating: ⭐ {product.rating}</p>
        </div>
      </div>

      
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default ProductNode;

