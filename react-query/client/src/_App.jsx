import { fetchTasks, loadTask } from './utils/services';
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((data) => {
      setTasks(data);
    });
    loadTask('lyxNDusHm_ZoxFj9i78D7').then((singleTask) =>
      console.log(singleTask)
    );
  }, []);

  return (
    <div className='App'>
      <h1>React App</h1>
      {tasks ? (
        tasks.map((task) => {
          return (
            <div key={task.id}>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
            </div>
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default App;
