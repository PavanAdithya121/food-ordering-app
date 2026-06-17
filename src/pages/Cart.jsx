import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, totalItems, totalPrice } = useCart();

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
        <Link to="/" className="secondary-button">
          Browse Menu
        </Link>
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
                </div>
                <div className="cart-item-price">₹{item.price * item.quantity}</div>
              </article>
            ))}
          </section>

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
              <Link to="/checkout" className="primary-button">
                Checkout now
              </Link>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}

export default Cart;