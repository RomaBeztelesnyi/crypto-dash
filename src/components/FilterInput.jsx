const FilterInput = ({filter, onSetFilter}) => {
  return (
    <div className="filter">
        <input type="text" placeholder="Filter coin or symbols..." value={filter} onChange={(e) => onSetFilter(e.target.value)} />
    </div>
  );
};

export default FilterInput