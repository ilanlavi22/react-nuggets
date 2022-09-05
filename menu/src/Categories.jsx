const Categories = ({ categories, filterCategory }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button key={index} type='button' className='filter-btn' onClick={() => filterCategory(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
