const Categories = ({ filterCategory }) => {
  //console.log(filterCategory('lunch'));
  return (
    <>
      {/* {categories.map((category) => {
        return { category };
      })} */}
      <div className='btn-container'>
        <button type='button' className='filter-btn' onClick={() => filterCategory('all')}>
          All
        </button>
        <button type='button' className='filter-btn' onClick={() => filterCategory('lunch')}>
          Lunch
        </button>
        <button type='button' className='filter-btn' onClick={() => filterCategory('breakfast')}>
          Breakfast
        </button>
      </div>
    </>
  );
};

export default Categories;
