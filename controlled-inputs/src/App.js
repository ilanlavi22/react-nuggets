import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    name: '',
    age: '',
    email: ''
  });

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setUser({ ...user, [inputName]: inputValue });
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.age && user.email) {
      const newUser = { ...user, id: new Date().getTime().toString() };
      setUsers([...users, newUser]);
      setUser({ name: '', age: '', email: '' });
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {error && <div className='error'>Please fill in your name, age and email</div>}
      <article className='form'>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name :</label>
            <input type='text' name='name' id='name' value={user.name} onChange={handleChange} />
          </div>

          <div className='form-control'>
            <label htmlFor='age'>Age :</label>
            <input type='text' name='age' id='age' value={user.age} onChange={handleChange} />
          </div>

          <div className='form-control'>
            <label htmlFor='email'>Email :</label>
            <input type='text' name='email' id='email' value={user.email} onChange={handleChange} />
          </div>

          <button type='submit' className='btn'>
            Add User
          </button>
        </form>
      </article>

      <article>
        {users &&
          users.map((user) => {
            const { id, name, age, email } = user;
            return (
              <div key={id} className='item'>
                <h4>{name}</h4>
                <p>{email}</p>
                <p>{age}</p>
              </div>
            );
          })}
      </article>
    </>
  );
}

export default App;
