import React from 'react';
import './Cart.css';

const Cart = (props) => {
  
  return (
    <div>
      <div className="cart">
        <h5 className='warning'>You can order only one <span>burger</span> at a time!!</h5>
        <h2>Cart:{props.cart}</h2>
        <button className='favorit-btn'>Choose favorit</button>
        <button className='clear-btn'>Choose again</button>
      </div>
    </div>
  );
};

export default Cart;