import { useNavigate } from "react-router-dom";
import "./UpiPayments.css";

function UpiPayments() {
  const navigate = useNavigate();

  const handleAppClick = (app) => {
    console.log("[UpiPayments] App clicked:", app);
    const raw = localStorage.getItem("paymentLogs") || "[]";
    let logs = [];
    try {
      logs = JSON.parse(raw);
    } catch (e) {
      logs = [];
    }
    const entry = { app, time: new Date().toISOString() };
    logs.unshift(entry);
    localStorage.setItem("paymentLogs", JSON.stringify(logs));
    console.log("[UpiPayments] Navigating to /success...");
    navigate("/success");
  };

  return (
    <main className="page-center payment-page">
      <div className="payment-card animated-card">
        <h1 className="section-title">UPI Payments</h1>
        <div className="section-divider" />
        <p>Select your preferred UPI app to proceed with payment.</p>

        <div className="upi-options">
          <button type="button" className="upi-btn" onClick={() => handleAppClick("GPay")}>
            GPay
          </button>
          <button type="button" className="upi-btn" onClick={() => handleAppClick("PhonePe")}>
            PhonePe
          </button>
          <button type="button" className="upi-btn" onClick={() => handleAppClick("BHIM")}>
            BHIM
          </button>
          <button type="button" className="upi-btn" onClick={() => handleAppClick("CredPay")}>
            Cred Pay
          </button>
          <button type="button" className="upi-btn" onClick={() => handleAppClick("Other")}>
            Other Payments
          </button>
        </div>
      </div>
    </main>
  );
}

export default UpiPayments;
