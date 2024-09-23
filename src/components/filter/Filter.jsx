// STYLE
import './filter.css';

function Filter({ categories, onCategoryChange }) {
  return (
    <div className="filter">
      <label 
        htmlFor="categorySelect" 
        className="labelClass"
      >
        Choisissez une catégorie :
      </label>
      <select
        id="categorySelect"
        onChange={(e) => onCategoryChange(e.target.value)}
        className='btnFilter'
      >
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
  
  export default Filter;