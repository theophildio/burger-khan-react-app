import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = (props) => {
  const {cart, deleteItem} = props;
  return (
    <div>
      <div className="cart">
        <h5 className='warning'>Can choose max 4 items but the order will be <span>1 burger</span> only!!</h5>
        <p>Selected Burger: {cart.length}</p>
        {
          cart.map(item => <CartItem 
            key={item.id}
            itemImg={item.picture}
            itemName={item.name}
            itemPrice={item.price}
          ></CartItem>)
        }
        <div className="cart-btns">
          <button className='cart-btn'>Choose favorit</button>
          <button onClick={deleteItem} className='cart-btn'>Choose again</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;