import { useState } from 'react';

export default function FormDataApi() {
  const [users, setUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // console.log(formData);
    // console.log([...formData.entries()]);  received as an array
    //per form element example: const name = formData.get('name');

    const submittedUser = Object.fromEntries(formData); // received as an object
    if (!submittedUser.name || !submittedUser.email)
      return console.log('no data submitted');
    const newUser = {
      id: new Date().getTime().toString(),
      name: submittedUser.name,
      email: submittedUser.email,
      framework: submittedUser.framework,
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    e.currentTarget.reset();
  };

  return (
    <div className='flex flex-col min-h-screen bg-slate-100 justify-center items-center'>
      <form
        onSubmit={submitHandler}
        className='bg-white px-10 py-5 w-[90%] rounded-md shadow-sm
      border-[1px] border-slate-200'
      >
        <h1 className='text-lg font-bold text-center pb-1'>Form Data API</h1>
        <div className='flex flex-col my-3'>
          <label htmlFor='name' className='text-[0.8rem] font-medium py-1'>
            Name
          </label>
          <input
            type='text'
            name='name'
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
            id='email'
            className='bg-sky-50 rounded-sm border-[1px] border-gray-300 p-1 text-xs'
          />
        </div>

        <div className='flex flex-col my-3'>
          <label htmlFor='framework' className='text-[0.8rem] font-medium py-1'>
            Framework
          </label>
          <select
            id='framework'
            name='framework'
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

      {users.length !== 0 && (
        <div className='flex flex-col w-[90%]'>
          <h2 className='text-base font-bold text-center pb-1 my-4'>
            Submitted Users
          </h2>

          {users.map((user) => (
            <div
              key={user.id}
              className='bg-white px-10 py-5 rounded-md shadow-sm
      border-[1px] border-slate-200 w-full flex flex-col gap-1 my-1'
            >
              <span className='text-xs capitalize'>
                <span className='font-bold pr-1'>Name:</span>
                {user.name}
              </span>
              <span className='text-xs'>
                <span className='font-bold pr-1'>Email:</span>
                {user.email}
              </span>
              <span className='text-xs capitalize'>
                <span className='font-bold pr-1'>Framework:</span>
                {user.framework}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
