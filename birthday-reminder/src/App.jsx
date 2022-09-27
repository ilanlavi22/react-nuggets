import { useState } from 'react';
import data from './data';
import List from './list';

function App() {
  const [people, setPeople] = useState(data);

  // const handleRemove = (id) => {
  //   const filterPeople = people.filter((person) => person.id !== id);
  //   setPeople(filterPeople);
  // };

  const handleRemove = (id) => {
    setPeople((prevPeople) => prevPeople.filter((people) => people.id !== id));
  };

  const handleClear = () => {
    setPeople([]);
  };

  const handleReset = () => {
    setPeople(data);
  };

  return (
    <main>
      <section className='container'>
        <h3>{`${people.length} birthdays today`}</h3>
        <List people={people} handleRemove={handleRemove} />
        <button onClick={handleClear}>Clear All</button>
        <button onClick={handleReset}>Reset</button>
      </section>
    </main>
  );
}

export default App;
