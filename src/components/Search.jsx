export default function Search({queryText, onChangeQueryText}) {
  return (
    <div className="search-container">
      <h1>Academic gallery</h1>
      <label className="search-input">
        <h3>Search: </h3>
        <input 
          type="text" 
          value={queryText}
          placeholder="Search by name or profession..."
          onChange={(e) => onChangeQueryText(e.target.value)}
        />
      </label>
    </div>
  );
}
