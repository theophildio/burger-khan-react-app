import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Product from '../Product/Product';

const Shop = () => {
  return (
    <div className='container'>
      <Header></Header>
      <div className="burger-items">
        <Product></Product>
      </div>
      <div className="cart">
        <h2>Cart</h2>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Shop;