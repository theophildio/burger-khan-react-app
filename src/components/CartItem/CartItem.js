import React from 'react';
import './CartItem.css'

const CartItem = (props) => {
  return (
    <div className='cart-item'>
      <div className="item-img">
        <img src={props.itemImg} alt="" />
      </div>
      <div className="item-details">
        <p>{props.itemName}</p>
        <p><small> ${props.itemPrice}</small></p>
      </div>
    </div>
  );
};

export default CartItem;