import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { totalItems } = useCart();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/">DineCart</Link>
      </div>
      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart" className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
            Cart {totalItems > 0 ? `(${totalItems})` : ""}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
