import "./FoodCard.css";

function FoodCard({ item, quantity = 0, onAdd, onDecrease }) {
  return (
    <div className="food-card">
      <img src={item.image} alt={item.name} />
      <div className="food-card-details">
        <h3>{item.name}</h3>
        <p>{item.category}</p>
      </div>
      <div className="food-card-footer">
        <div>
          <h4>₹{item.price}</h4>
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
