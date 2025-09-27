const SortSelector = ({ sortBy,onSetSortBy }) => {
  return (
    <div className="controls">
      <label htmlFor="sort">Sort by:</label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => onSetSortBy(e.target.value)}
      >
        <option value="market_cap_desc">Capitalization (by increase)</option>
        <option value="market_cap_asc">Capitalization (by reduction)</option>
        <option value="price_desc">Price (by increase)</option>
        <option value="price_asc">Price (by reduction)</option>

      </select>
    </div>
  );
};

export default SortSelector