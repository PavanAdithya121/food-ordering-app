import { useMemo, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FoodCard from "../components/FoodCard/FoodCard";
import SearchBar from "../components/SearchBar/SearchBar";
import menuItems from "../data/menu";
import { useCart } from "../context/CartContext";

function Home() {
  const { cartItems, addToCart, decreaseQuantity } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return menuItems;
    return menuItems.filter((item) =>
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

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
          <SearchBar query={searchQuery} setQuery={setSearchQuery} onSearch={setSearchQuery} />
          <div className="feature-lines">
            <p>Every dish is crafted for seamless ordering, fast delivery, and delightful presentation.</p>
            <p>Enjoy a modern, professional interface with clear flow from menu to payment.</p>
          </div>
        </section>

        <section className="menu-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => {
              const quantity = cartItems.find((cartItem) => cartItem.id === item.id)?.quantity || 0;
              return (
                <article key={item.id} className="menu-item-card">
                  <FoodCard
                    item={item}
                    quantity={quantity}
                    onAdd={() => addToCart(item)}
                    onDecrease={() => decreaseQuantity(item.id)}
                  />
                </article>
              );
            })
          ) : (
            <div className="no-results-card">
              <p>No matching dishes were found. Try another keyword.</p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default Home;
