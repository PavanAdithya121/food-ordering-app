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
            <h1 className="section-title">Food Booking</h1>
            <div className="section-divider" />
            <p>Discover the most delicious meals with a polished ordering experience. Add favorites to your cart and checkout with confidence.</p>
          </div>
          <div className="feature-lines">
            <p>Every dish is crafted for seamless ordering, fast delivery, and delightful presentation.</p>
            <p>Enjoy a modern, professional interface with clear flow from menu to payment.</p>
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
