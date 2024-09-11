import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div className="home">
      <h1 className='products'>Products</h1>
      <ProductList />
    </div>
  );
};

export default Home;