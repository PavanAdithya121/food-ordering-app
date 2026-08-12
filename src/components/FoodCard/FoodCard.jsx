import "./FoodCard.css";

function FoodCard({ item, quantity = 0, onAdd, onDecrease }) {
  return (
    <div className="food-card">
      <img src={item.image} alt={item.name} />
      <div className="food-card-details">
        <div className="food-card-topline">
          <h3>{item.name}</h3>
          {item.popular && <span className="food-card-tag">Popular</span>}
        </div>
        <p>{item.category}</p>
      </div>
      <div className="food-card-footer">
        <div>
          <div className="price-line">
            <h4>₹{item.price}</h4>
            {item.popular && <span className="rating-pill">★ {item.rating || 4.5}</span>}
          </div>
          {quantity > 0 && <span className="quantity-badge">{quantity} in cart</span>}
        </div>
        <div className="card-actions">
          {quantity > 0 ? (
            <>
              <button type="button" className="secondary-button" onClick={onDecrease}>
                -
              </button>
              <button type="button" onClick={onAdd}>
                +
              </button>
               
            </>
      
          ) : (
            <button type="button" onClick={onAdd}>
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default FoodCard;
