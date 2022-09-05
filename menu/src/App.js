import data from './data';
import Categories from './Categories';
import Menu from './Menu';
import { useState } from 'react';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

function App() {
  const [menuItems, setMenusItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterCategory = (category) => {
    if (category === 'all') {
      setMenusItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenusItems(newItems);
  };

  return (
    <main>
      <div className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterCategory={filterCategory} />
        <Menu menuItems={menuItems} />
      </div>
    </main>
  );
}

export default App;
