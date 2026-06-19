import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";

function Payment() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    const TIMER_KEY = "payment_start";
    
    // Simple reload detection using performance API
    let isReload = false;
    try {
      // Modern browsers: check PerformanceNavigationTiming
      const navEntries = performance.getEntriesByType("navigation");
      if (navEntries && navEntries.length > 0) {
        isReload = navEntries[0].type === "reload";
        console.log("[Payment] Navigation type:", navEntries[0].type);
      }
      // Fallback for older browsers
      else if (!isReload && performance.navigation) {
        isReload = performance.navigation.type === 1;
        console.log("[Payment] Performance.navigation.type:", performance.navigation.type);
      }
    } catch (e) {
      console.log("[Payment] Error checking nav type:", e);
    }

    if (isReload) {
      console.log("[Payment] RELOAD DETECTED - redirecting to home");
      sessionStorage.removeItem(TIMER_KEY);
      navigate("/");
      return;
    }

    console.log("[Payment] Normal navigation - starting 8-minute timer");
    
    // Set up 8-minute timer
    let start = sessionStorage.getItem(TIMER_KEY);
    if (!start) {
      start = Date.now().toString();
      sessionStorage.setItem(TIMER_KEY, start);
      console.log("[Payment] New timer session started");
    } else {
      console.log("[Payment] Resuming existing timer session");
    }
    
    const expiry = parseInt(start, 10) + 8 * 60 * 1000;

    const tick = () => {
      const rem = expiry - Date.now();
      if (rem <= 0) {
        console.log("[Payment] TIMER EXPIRED - clearing cart and redirecting");
        sessionStorage.removeItem(TIMER_KEY);
        clearCart();
        localStorage.removeItem("paymentLogs");
        navigate("/");
      }
    };

    tick();
    const timer = setInterval(tick, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, [navigate, clearCart]);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/success");
  };

  return (
    <main className="page-center payment-page">
      <div className="payment-card animated-card">
        <h1 className="section-title">Secure Payment</h1>
        <div className="section-divider" />
        <p>
          Enter your payment details below to complete your order with
          confidence.
        </p>
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
        <div className="upi-payments">        
          <form action="">
            <label>UPI Payments </label> 
            <button type="button" onClick={() => navigate("/payment/upi")} className="payments">Click Here </button>
          </form>
        </div>
        <Link to="/" className="secondary-button payment-back">
          Back to Home
        </Link>
      </div> 
    </main>
  );
}

export default Payment;
