import { Link } from "react-router-dom";

function Success() {
  return (
    <main className="page-center success-page">
      <div className="success-panel animated-card">
        <h1 className="section-title">Order Confirmed</h1>
        <div className="section-divider" />
        <p>Your order has been placed successfully. We are preparing it for delivery now.</p>
        <Link to="/" className="primary-button">
          Return Home
        </Link>
      </div>
    </main>
  );
}

export default Success;