import { Link } from "react-router-dom";

function Payment() {
  return (
    <main className="page-center">
      <h1>Payment Page</h1>
      <p>Enter your payment details to complete the order.</p>
      <Link to="/success">Submit Payment</Link>
      <Link to="/">Back to Home</Link>
    </main>
  );
}

export default Payment;