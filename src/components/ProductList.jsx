import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart } from '../store/CartSlice';
import { Link } from 'react-router-dom';
const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-wrapper">
          <img className="product-img" src={product.thumbnail} alt={product.title} />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <div className="product-rayting">
          
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`star ${index < Math.round(product.rating) ? 'filled' : ''}`}
              >
                
              </span>
            ))}
          </div>
          <Link to={"/about"}> <button>enter</button> </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;