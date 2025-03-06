import React from 'react';
import { useParams } from 'react-router-dom';
import all_product from '../Components/Assets/all_product'; // Ensure you import the products data

export const Product = () => {
  const { productId } = useParams();
  const product = all_product.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>New Price: {product.new_price}</p>
      <p>Old Price: {product.old_price}</p>
    </div>
  );
}
