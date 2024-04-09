import props from "./App";

function CategoryFilter({categories, selectedCategory, setCategory}) {

  const categoryButton = categories.map((category) => {
    return (
      <button 
        className={selectedCategory === category ? "selected" : ""} 
        key={category}
        onClick={()=>setCategory(category)}>
        {category}
      </button>
      );
  });
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
