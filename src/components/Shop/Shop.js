import React, { useEffect, useState } from 'react';
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
    <div className='container'>
      <Header></Header>
      <div className="main">
        <div className="burger-items">
          {
            products.map(product => <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>)
          }
        </div>
        <div className="cart">
          <h2>Cart:{cart.length}</h2>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Shop;