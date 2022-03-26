import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
  const {product, handleAddToCart} = props;
  const {picture, name, price} = product;
  return (
    <div className='product'>
      <div className="product-img">
        <img src={picture} alt="" />
      </div>
      <div className="product-details">
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <button onClick={() => handleAddToCart(product)} className='product-btn'>
          <p>Order now</p>
          <FontAwesomeIcon icon={faBurger}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;