import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const changeQuantity = (item, amount) => {
    dispatch(updateQuantity({
      id: item.id,
      quantity: item.quantity + amount
    }));
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="logo">🌿 Paradise Nursery</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/about">About Us</Link>
          <Link to="/cart" className="cart-link">🛒 Cart ({cartCount})</Link>
        </div>
      </nav>

      <main className="cart-container">
        <h1 className="page-title">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <section className="empty-cart">
            <div className="empty-icon">🪴</div>
            <h2>Your cart is waiting for some greenery</h2>
            <p>You haven't added any plants yet.</p>
            <Link to="/plants" className="primary-btn">Continue Shopping</Link>
          </section>
        ) : (
          <>
            <div className="cart-list">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-details">
                    <h2>{item.name}</h2>
                    <p>Unit price: ₹{item.price}</p>
                    <p className="line-total">
                      Item total: ₹{item.price * item.quantity}
                    </p>
                  </div>

                  <div className="quantity-controls" aria-label={`Quantity for ${item.name}`}>
                    <button
                      type="button"
                      onClick={() => changeQuantity(item, -1)}
                      aria-label={`Decrease ${item.name} quantity`}
                    >−</button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => changeQuantity(item, 1)}
                      aria-label={`Increase ${item.name} quantity`}
                    >+</button>
                  </div>

                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </article>
              ))}
            </div>

            <section className="cart-summary">
              <p>Total items: <strong>{cartCount}</strong></p>
              <p className="grand-total">Total amount: ₹{totalAmount}</p>
              <div className="cart-actions">
                <Link to="/plants" className="secondary-btn">Continue Shopping</Link>
                <button
                  type="button"
                  className="primary-btn"
                  onClick={() => window.alert("Coming Soon! Thank you for shopping at Paradise Nursery.")}
                >
                  Checkout
                </button>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
