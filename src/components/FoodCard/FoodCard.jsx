import "./FoodCard.css";

function FoodCard({ item, onAdd }) {
  return (
    <div className="food-card">
      <img src={item.image} alt={item.name} />
      <div className="food-card-details">
        <h3>{item.name}</h3>
        <p>{item.category}</p>
      </div>
      <div className="food-card-footer">
        <h4>₹{item.price}</h4>
        <button onClick={onAdd}>Add To Cart</button>
      </div>
    </div>
  );
}

export default FoodCard;
