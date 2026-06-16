import { Link } from "react-router-dom";

function Checkout() {
  return (
    <main className="page-center">
      <h1>Checkout Page</h1>
      <p>Review your order and proceed to payment.</p>
      <Link to="/payment">Go to Payment</Link>
      <Link to="/">Back to Home</Link>
    </main>
  );
}

export default Checkout;