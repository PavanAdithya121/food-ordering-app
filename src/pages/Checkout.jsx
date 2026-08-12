import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const navigate = useNavigate();
  const {
    totalItems,
    totalPrice,
    deliveryFee,
    payableTotal,
    remainingForFreeDelivery,
  } = useCart();

  useEffect(() => {
    console.log("[Checkout] totalItems:", totalItems, "payableTotal:", payableTotal);
    if (totalItems === 0) return undefined;
    const timer = setTimeout(() => navigate("/payment"), 3000);
    return () => clearTimeout(timer);
  }, [navigate, totalItems]);

  return (
    <main className="page-center checkout-page">
      <div className="checkout-panel animated-card">
        <h1 className="section-title">Checkout</h1>
        <div className="section-divider" />
        <p>Reviewing your order and preparing your secure payment page.</p>
        <div className="status-pill">Redirecting to payment...</div>
        <div className="checkout-summary">
          <div className="summary-row">
            <span>Subtotal</span>
            <strong>₹{totalPrice}</strong>
          </div>
          <div className="summary-row">
            <span>Delivery fee</span>
            <strong>₹{deliveryFee}</strong>
          </div>
          <div className="summary-row total-row">
            <span>Total</span>
            <strong>₹{payableTotal}</strong>
          </div>
          <p>
            {remainingForFreeDelivery > 0
              ? `Add ₹${remainingForFreeDelivery} more for free delivery`
              : "You qualify for free delivery!"}
          </p>
        </div>
        <div className="checkout-actions">
          <button
            type="button"
            className="primary-button"
            onClick={() => {
              console.log("[Checkout] Continue to Payment clicked");
              navigate("/payment");
            }}
          >
            Continue to Payment
          </button>
          <Link to="/cart" className="secondary-button">
            Back to Cart
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Checkout;