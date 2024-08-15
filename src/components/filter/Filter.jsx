const Filter = ({ categories, onCategoryChange }) => {
    return (
      <div className="filter">
        <select onChange={(e) => onCategoryChange(e.target.value)}>
        {categories.map(category => (
          <option key={category}>
            {category}
          </option>
        ))}
      </select>
      </div>
    );
  };
  
  export default Filter;