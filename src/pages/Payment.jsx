import { useNavigate, Link } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/success");
  };

  return (
    <main className="page-center payment-page">
      <div className="payment-card animated-card">
        <h1 className="section-title">Secure Payment</h1>
        <div className="section-divider" />
        <p>Enter your payment details below to complete your order with confidence.</p>
        <div className="payment-steps">
          <span className="step active">Billing</span>
          <span className="step">Confirmation</span>
        </div>

        <form className="payment-form" onSubmit={handleSubmit}>
          <label>
            Card number
            <input type="text" placeholder="1234 5678 9012 3456" />
          </label>
          <label>
            Expiry date
            <input type="text" placeholder="MM / YY" />
          </label>
          <label>
            CVC
            <input type="text" placeholder="123" />
          </label>
          <button type="submit" className="primary-button payment-button">
            Submit Payment
          </button>
        </form>
      </div>
      <Link to="/" className="secondary-button payment-back">
        Back to Home
      </Link>
    </main>
  );
}

export default Payment;