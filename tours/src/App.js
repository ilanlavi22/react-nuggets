import { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  const removeTour = (id) => {
    const filterTours = tours.filter((tour) => tour.id !== id);
    setTours(filterTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isError) {
    return (
      <main>
        <div className='loading'>
          <h1>Error...</h1>
        </div>
      </main>
    );
  }
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section>
        <div className='title'>
          <h2>our tours</h2>
          <div className='underline'></div>
        </div>
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </section>
    </main>
  );
}

export default App;
