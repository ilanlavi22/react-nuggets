import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    framework: '',
  });
  const [allUsers, setAllUsers] = useState([]);

  const handleChange = (e) => {
    //console.log(e.target.name);
    // const { name, value } = e.target;
    // setUser({ ...user, [name]: value });
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name || user.email || user.framework) {
      const newUser = { ...user, id: new Date().getTime().toString() };
      setAllUsers([...allUsers, newUser]);
      setUser({ name: '', email: '', framework: '' });
    }
  };

  const usersList = () => {
    return allUsers.map((user) => {
      const { id, name, email, framework } = user;
      return (
        <div
          key={id}
          className='bg-white px-10 py-5 rounded-md shadow-sm
      border-[1px] border-slate-200 w-full flex flex-col gap-1 my-1'
        >
          <span className='text-xs capitalize'>
            <span className='font-bold pr-1'>Name:</span>
            {name}
          </span>
          <span className='text-xs'>
            <span className='font-bold pr-1'>Email:</span>
            {email}
          </span>
          <span className='text-xs capitalize'>
            <span className='font-bold pr-1'>Framework:</span>
            {framework}
          </span>
        </div>
      );
    });
  };

  return (
    <div className='flex flex-col min-h-screen bg-slate-100 justify-center items-center'>
      <form
        onSubmit={handleSubmit}
        className='bg-white px-10 py-5 w-[90%] rounded-md shadow-sm
      border-[1px] border-slate-200'
      >
        <h1 className='text-lg font-bold text-center pb-1'>
          Form Multiple Inputs
        </h1>
        <div className='flex flex-col my-3'>
          <label htmlFor='name' className='text-[0.8rem] font-medium py-1'>
            Name
          </label>
          <input
            type='text'
            name='name'
            value={user.name}
            onChange={handleChange}
            id='name'
            className='bg-sky-50 rounded-sm border-[1px] border-gray-300 p-1 text-xs'
          />
        </div>

        <div className='flex flex-col my-3'>
          <label htmlFor='email' className='text-[0.8rem] font-medium py-1'>
            Email
          </label>
          <input
            type='text'
            name='email'
            value={user.email}
            onChange={handleChange}
            id='email'
            className='bg-sky-50 rounded-sm border-[1px] border-gray-300 p-1 text-xs'
          />
        </div>

        <div className='flex flex-col my-3'>
          <label htmlFor='framework' className='text-[0.8rem] font-medium py-1'>
            Framework
          </label>
          <select
            name='framework'
            id='framework'
            value={user.framework}
            onChange={handleChange}
            className='bg-sky-50 rounded-sm border-[1px] border-gray-300 p-1 text-xs'
          >
            <option value='react'>React</option>
            <option value='Angular'>Angular</option>
          </select>
        </div>

        <button
          type='submit'
          className='w-full bg-cyan-500 rounded-sm p-0 py-1 my-3 text-white text-sm hover:bg-cyan-800 transition outline-none duration-150 ease-out'
        >
          Submit
        </button>
      </form>
      {allUsers && (
        <div className='flex flex-col w-[90%]'>
          <h2 className='text-base font-bold text-center pb-1 my-4'>
            Submitted Users
          </h2>
          {usersList()}
        </div>
      )}
    </div>
  );
}

export default App;
