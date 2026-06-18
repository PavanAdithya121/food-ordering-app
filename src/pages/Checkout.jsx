import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/payment"), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="page-center checkout-page">
      <div className="checkout-panel animated-card">
        <h1 className="section-title">Checkout</h1>
        <div className="section-divider" />
        <p>Reviewing your order and preparing your secure payment page.</p>
        <div className="status-pill">Redirecting to payment...</div>
        <div className="checkout-actions">
          <Link to="/payment" className="primary-button">
            Continue to Payment
          </Link>
          <Link to="/cart" className="secondary-button">
            Back to Cart
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Checkout;