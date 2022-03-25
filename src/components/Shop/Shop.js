import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <div className='container'>
      <Header></Header>
      <div className="burger-items">
        {
          products.map(product => <Product
            key={product.id}
            product={product}
          ></Product>)
        }
        
      </div>
      <div className="cart">
        <h2>Cart</h2>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Shop;