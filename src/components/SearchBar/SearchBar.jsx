import "./SearchBar.css";

function SearchBar({ query, setQuery, onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
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
  );
}
export default SearchBar;
