const List = ({ people, handleRemove }) => {
  return (
    <>
      {people &&
        people.map((person) => {
          const { id, name, age, image } = person;

          return (
            <article key={id} className='person'>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
                <button className='small' onClick={() => handleRemove(id)}>
                  Remove
                </button>
              </div>
            </article>
          );
        })}
    </>
  );
};

export default List;
