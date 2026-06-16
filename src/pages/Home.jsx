import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FoodCard from "../components/FoodCard/FoodCard";
import menuItems from "../data/menu";
import { useCart } from "../context/CartContext";

function Home() {
  const { addToCart } = useCart();

  return (
    <>
      <Navbar />
      <Hero />
      <main className="home-page">
        <section className="page-links">
          <div className="intro-copy">
            <h1>Food Booking</h1>
            <p>Discover the most delicious meals with a polished ordering experience. Add favorites to your cart and checkout with confidence.</p>
          </div>
        </section>

        <section className="menu-grid">
          {menuItems.map((item) => (
            <article key={item.id} className="menu-item-card">
              <FoodCard item={item} onAdd={() => addToCart(item)} />
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;
