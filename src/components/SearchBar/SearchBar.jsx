import "./SearchBar.css";

function SearchBar({ query, setQuery, onSearch }) {
  const trending = ["dosa", "biryani", "ice cream", "south indian", "dessert"];

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  const handleTagClick = (tag) => {
    setQuery(tag);
    onSearch(tag);
  };

  return (
    <div className="search-wrapper">
      <form className="search-bar" onSubmit={handleSubmit}>
        <label htmlFor="menu-search" className="visually-hidden">
          Search menu items
        </label>
        <input
          id="menu-search"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search dishes or categories"
          aria-label="Search menu items"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="search-suggestions">
        <span>Try:</span>
        {trending.map((tag) => (
          <button
            key={tag}
            type="button"
            className="suggestion-pill"
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
export default SearchBar;
