import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);

  const handleAddToCart = product => {
    const itemAddedCart = cart.filter(addItem => addItem !== product);
    const duplicateItem = cart.find(addedItem => addedItem.id === product.id );
    const newCart = [...itemAddedCart, product];
    if (duplicateItem) {
      alert('Oops! This item is already added.');
      return;
    }
    else if (newCart.length > 4) {
      alert('Sorry! You have added 4 items already.');
      return;
    }
    else {
      setCart(newCart);
    }
  }

  const deleteItem = () => {
    if (cart.length === 0) {
      alert('Oops! Cart is empty.');
      return;
    }
    else {
      setCart([]);
    }  
  }

  const getRandomItem = () => {
    if (cart.length === 0) {
      alert('Oops! You do not have 4 items in cart.');
      return;
    } 
    else {
      const setRandomItem = [cart[Math.floor(Math.random() * cart.length)]];
      setCart(setRandomItem);
    }
  }

  return (
    <div className='shop'>
      <Header></Header>
      <div className="container main">
        <div className="burger-items">
          {
            products.map(product => <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>)
          }
        </div>
        <Cart 
          cart={cart}
          deleteItem={deleteItem}
          getRandomItem={getRandomItem}
        ></Cart>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Shop;