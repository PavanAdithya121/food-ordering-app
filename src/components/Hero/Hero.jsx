import "./Hero.css";

function Hero({ onOrderNow }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-pill">Fresh &amp; Fast</div>
        <h1>Delicious Food Delivered Fast</h1>
        <p>Order your favorite meals and get them delivered to your doorstep in minutes.</p>
        <button type="button" onClick={onOrderNow} className="hero-button">
          Order Now
        </button>
      </div>
    </section>
  );
}

export default Hero;


