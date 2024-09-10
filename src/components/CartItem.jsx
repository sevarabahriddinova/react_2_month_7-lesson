import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../features/cart/CartSlice';
import './cartItem.css'; 

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value, 10) }));
  };

  return (
    <div className="cart-item">
      <img className="item-image" src={item.thumbnail} alt={item.title} />
      <div className="item-details">
        <h4 className="item-title">{item.title}</h4>
        <input
          className="quantity-input"
          type="number"
          value={item.quantity}
          min="1"
          onChange={handleQuantityChange}
        />
        <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;