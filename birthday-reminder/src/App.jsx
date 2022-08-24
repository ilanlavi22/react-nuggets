import { useState } from 'react';
import data from './data';
import List from './list';

function App() {
  const [people, setPeople] = useState(data);
  const [counter, setCounter] = useState(data.length);

  const handleRemove = (id) => {
    const filterPeople = people.filter((person) => person.id !== id);
    setPeople(filterPeople);
    setCounter((prevCount) => prevCount - 1);
  };

  const handleClear = () => {
    setPeople([]);
    setCounter(0);
  };

  const handleReset = () => {
    setPeople(data);
    setCounter(data.length);
  };

  return (
    <main>
      <section className='container'>
        <h3>{`${counter} birthdays today`}</h3>
        <List people={people} handleRemove={handleRemove} />
        <button onClick={handleClear}>Clear All</button>
        <button onClick={handleReset}>Reset</button>
      </section>
    </main>
  );
}

export default App;
