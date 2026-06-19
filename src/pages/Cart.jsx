import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const navigate = useNavigate();
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
    totalItems,
    totalPrice,
    deliveryFee,
    payableTotal,
    freeDeliveryTarget,
    remainingForFreeDelivery,
  } = useCart();
  const progress = Math.min((totalPrice / freeDeliveryTarget) * 100, 100);
  const remaining = remainingForFreeDelivery;

  return (
    <main className="cart-page">
      <div className="cart-header">
        <div>
          <h1>Your Cart</h1>
          <p>
            {totalItems > 0
              ? `You have ${totalItems} item${totalItems > 1 ? "s" : ""} in your cart.`
              : "Your cart is empty."}
          </p>
        </div>
        <div className="cart-actions-row">
          <button
            type="button"
            className="secondary-button clear-cart-button"
            onClick={clearCart}
            disabled={cartItems.length === 0}
          >
            Clear cart
          </button>
          <Link to="/" className="secondary-button">
            Browse Menu
          </Link>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <section className="empty-cart">
          <p>Add items from the homepage and manage quantities here.</p>
          <Link to="/" className="primary-button">
            Browse Menu
          </Link>
        </section>
      ) : (
        <div className="cart-content">
          <section className="cart-list">
            {cartItems.map((item) => (
              <article key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <button
                    type="button"
                    className="remove-button"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
                <div className="cart-item-price">₹{item.price * item.quantity}</div>
              </article>
            ))}
          </section>
          <br />
          <button
            type="button"
            className="primary-button"
            onClick={() => navigate("/checkout")}
          >
            Checkout now
          </button>
              
              <br />
          <aside className="cart-summary">
            <div className="summary-card">
              <h2>Order summary</h2>
              <div className="summary-row">
                <span>Total items</span>
                <strong>{totalItems}</strong>
              </div>
              <div className="summary-row">
                <span>Subtotal</span>
                <strong>₹{totalPrice}</strong>
              </div>
              <div className="summary-row delivery-row">
                <span>Delivery fee</span>
                <strong>₹{deliveryFee}</strong>
              </div>
              <div className="summary-row total-row">
                <span>Total</span>
                <strong>₹{payableTotal}</strong>
              </div>
              <div className="delivery-progress">
                <span>{remaining > 0 ? `Add ₹${remaining} more for free delivery` : "You qualify for free delivery!"}</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${progress}%` }} />
                </div>
              </div>
              {/* <Link to="/checkout" className="primary-button">
                <button>Checkout now</button>
              </Link> */}
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}

export default Cart;