import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [people, setpeople] = useState(data);
  const [dataIndex, setDataIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (dataIndex < 0) {
      setDataIndex(lastIndex);
    }
    if (dataIndex > lastIndex) {
      setDataIndex(0);
    }
  });

  useEffect(() => {
    let slider = setInterval(() => {
      setDataIndex(dataIndex + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [dataIndex]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>
          reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, slideIndex) => {
          const { id, title, image, name, quote } = person;
          let position = 'nextSlide';
          if (slideIndex === dataIndex) {
            position = 'activeSlide';
          }
          if (slideIndex === dataIndex - 1 || (dataIndex === 0 && slideIndex === people.length - 1)) {
            position = 'lastSlide';
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        <button className='prev' onClick={() => setDataIndex(dataIndex - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setDataIndex(dataIndex + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
