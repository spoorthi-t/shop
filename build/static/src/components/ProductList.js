import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const products = [
  {
    id: 1,
    name: 'Smartphone',
    price: '$299',
    image: 'https://via.placeholder.com/150?text=Smartphone',
  },
  {
    id: 2,
    name: 'Headphones',
    price: '$99',
    image: 'https://via.placeholder.com/150?text=Headphones',
  },
  {
    id: 3,
    name: 'Laptop',
    price: '$799',
    image: 'https://via.placeholder.com/150?text=Laptop',
  },
  {
    id: 4,
    name: 'Smartwatch',
    price: '$199',
    image: 'https://via.placeholder.com/150?text=Smartwatch',
  },
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
