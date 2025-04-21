import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p className="price">{product.price}</p>
      <button className="buy-button">Buy Now</button>
    </div>
  );
}

export default ProductCard;
