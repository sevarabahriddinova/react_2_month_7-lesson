import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem';
import './Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const subTotal = useSelector((state) => state.cart.subTotal);
  const vat = useSelector((state) => state.cart.vat);
  const total = useSelector((state) => state.cart.total);

  return (
    <div className="cart">
      <div className="marquee-container">
        <marquee className="marquee-text">Xaridingiz uchun rahmat</marquee>
      </div>
      <h2 className="cart-title">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="cart-summary">
            <p className="summary-item">Subtotal: <span>${subTotal.toFixed(2)}</span></p>
            <p className="summary-item">VAT (12%): <span>${vat.toFixed(2)}</span></p>
            <p className="summary-item total">Total: <span>${total.toFixed(2)}</span></p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;