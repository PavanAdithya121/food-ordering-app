import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";

function Success() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    console.log("[Success] Page mounted - clearing session data");
    localStorage.removeItem("paymentLogs");
    sessionStorage.removeItem("payment_start");
    console.log("[Success] Session cleanup complete");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleReturnHome = () => {
    console.log("[Success] Return Home button clicked");
    clearCart();
    localStorage.removeItem("paymentLogs");
    sessionStorage.removeItem("payment_start");
    console.log("[Success] Cleanup done, navigating to home");
    // Use navigate first, with window.location as fallback
    setTimeout(() => {
      navigate("/");
    }, 100);
  };

  return (
    <main className="page-center success-page">
      <div className="success-panel animated-card">
        <h1 className="section-title">Order Confirmed</h1>
        <div className="section-divider" />
        <p>Your order has been placed successfully. We are preparing it for delivery now.</p>
        <button
          type="button"
          className="primary-button"
          onClick={handleReturnHome}
        >
          Return Home
        </button>
      </div>
    </main>
  );
}

export default Success;
