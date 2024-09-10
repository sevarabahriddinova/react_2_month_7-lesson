import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart } from '../store/CartSlice';
 
const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img className="product-image" src={product.thumbnail} alt={product.title} />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <div className="product-rating">
            Rating: 
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`star ${index < Math.round(product.rating) ? 'filled' : ''}`}
              >
                ★
              </span>
            ))}
          </div>
          <button className="add-to-cart-button" onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;