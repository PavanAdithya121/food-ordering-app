import "./PromoBanner.css";

function PromoBanner({ onViewFeatured }) {
  return (
    <section className="promo-banner">
      <div className="promo-copy">
        <span className="promo-tag">Good Choice</span>
        <h2>Free delivery for orders above ₹199</h2>
        <p>Explore our signature dishes and enjoy fast delivery with a special discount today.</p>
      </div>
      <button type="button" className="promo-button" onClick={onViewFeatured}>
        View featured dishes
      </button>
    </section>
  );
}

export default PromoBanner;
