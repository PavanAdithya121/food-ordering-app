import { useMemo, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FoodCard from "../components/FoodCard/FoodCard";
import SearchBar from "../components/SearchBar/SearchBar";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import PromoBanner from "../components/PromoBanner/PromoBanner";
import menuItems from "../data/menu";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer/Footer";

function Home() {
  const { cartItems, addToCart, decreaseQuantity } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("best");

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(menuItems.map((item) => item.category)));
    return ["All", ...uniqueCategories];
  }, []);

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return menuItems.filter((item) => {
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const sortedItems = useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      if (sortOption === "low") return a.price - b.price;
      if (sortOption === "high") return b.price - a.price;
      if (sortOption === "popular") return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      return 0;
    });
  }, [filteredItems, sortOption]);

  const scrollToMenu = () => {
    document.getElementById("menu-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Navbar />
      <main className="home-page">
        <section className="page-links">
          <div className="intro-copy">
            <h1 className="section-title">Food Booking</h1>
            <div className="section-divider" />
            <p>Discover the most delicious meals with a polished ordering experience. Add favorites to your cart and checkout with confidence.</p>
          </div>
          <PromoBanner />
          <SearchBar query={searchQuery} setQuery={setSearchQuery} onSearch={setSearchQuery} />
          <div className="controls-row">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            <div className="sort-panel">
              <label htmlFor="sort-select">Sort by</label>
              <select
                id="sort-select"
                value={sortOption}
                onChange={(event) => setSortOption(event.target.value)}
              >
                <option value="best">Best match</option>
                <option value="low">Lowest price</option>
                <option value="high">Highest price</option>
                <option value="popular">Popular first</option>
                <option value="free">Free</option>
              </select>
            </div>
          </div>
          <div className="feature-lines">
            <p>Every dish is crafted for seamless ordering, fast delivery, and delightful presentation.</p>
            <p>Enjoy a modern, professional interface with clear flow from menu to payment.</p>
          </div>
        </section>

        <section id="menu-grid" className="menu-grid">
          {sortedItems.length > 0 ? (
            sortedItems.map((item) => {
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
      <Footer />
    </>
  );
}

export default Home;
