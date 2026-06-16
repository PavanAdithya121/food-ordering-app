import { Link } from "react-router-dom";

function Success() {
  return (
    <main className="page-center">
      <h1>Success Page</h1>
      <p>Your order has been placed successfully.</p>
      <Link to="/">Return Home</Link>
    </main>
  );
}

export default Success;