export default function Search({ queryText, handleChange }) {
  return (
    <div className="search-container">
      <h1>Academic gallery</h1>
      <label className="search-input">
        <h3>Search: </h3>
        <input
          className="query-input"
          type="text"
          value={queryText}
          placeholder="Search by name or profession..."
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
