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

  const handleAddToCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
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
        <Cart cart={cart.length}></Cart>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Shop;