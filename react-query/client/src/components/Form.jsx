import { useState } from 'react';
import { useCreateTask } from '../utils/queryCustomHooks.js';

const Form = () => {
  const [newItem, setNewItem] = useState('');

  const { addTask, isLoading } = useCreateTask();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newItem, {
      onSuccess: () => {
        setNewItem('');
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=' w-[90vw] max-w-[1120px] bg-white rounded-sm shadow-sm py-8 px-8 my-3 mx-auto'
    >
      <h4 className=' text-lg'>Task bud</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type='submit' className='btn' disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  );
};

export default Form;
