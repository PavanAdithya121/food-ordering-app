import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2>DineCart</h2>

        <p>Delicious food delivered to your doorstep with speed and quality.</p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <a href="#menu-grid">Menu</a>
          <Link to="/cart">Cart</Link>
          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">© 2026 DineCart. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
