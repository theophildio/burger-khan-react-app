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
    const itemAddedCart = cart.filter(addItem => addItem !== product)
    const newCart = [...itemAddedCart, product];
    if (newCart.length > 4) {
      alert('Sorry! You have added 4 Burgers already.');
      return
    }
    setCart(newCart);
  }
  const deleteItem = () => {
    setCart([]);
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
        ></Cart>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Shop;