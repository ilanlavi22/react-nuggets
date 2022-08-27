import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      {tours &&
        tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} removeTour={removeTour}></Tour>;
        })}
    </div>
  );
};

export default Tours;
