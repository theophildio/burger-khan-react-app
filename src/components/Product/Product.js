import React from 'react';
import './Product.css';

const Product = (props) => {
  const {picture, name, price} = props.product;
  return (
    <div className='product'>
      <div className="product-img">
        <img src={picture} alt="" />
      </div>
      <div className="product-details">
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <button onClick={() => props.handleAddToCart(props.product)} className='product-btn'>
          <p>Order now</p>
        </button>
      </div>
    </div>
  );
};

export default Product;