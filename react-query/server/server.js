import express from 'express';
import cors from 'cors';
import { nanoid } from 'nanoid';

const app = express();

import morgan from 'morgan';

// data
let taskList = [
  { id: nanoid(), title: 'walk the dog', isDone: false },
  { id: nanoid(), title: 'wash dishes', isDone: false },
  { id: nanoid(), title: 'drink coffee', isDone: true },
  { id: nanoid(), title: 'take a nap', isDone: false },
];

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
app.use(
  cors({
    origin: 'https://react-nuggets-react-query-server.netlify.app',
  })
);

app.use(express.json());

//routes

app.get('/', (req, res) => {
  res.send('Hello World!');
});
// get all tasks
app.get('/api/tasks', (req, res) => {
  res.json({ taskList });
});
// post new task
app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) {
    res.status(400).json({ message: 'Title is required' });
    return;
  }
  const newTask = {
    id: nanoid(),
    title,
    isDone: false,
  };
  taskList = [...taskList, newTask];
  res.json({ task: newTask });
});
// load single task
app.get('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const task = taskList.find((task) => task.id === id);
  if (!task) {
    res.status(404).json({ message: 'Task not found' });
    return;
  }
  res.json(task);
});

// update task
app.patch('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { isDone } = req.body;

  taskList = taskList.map((task) => {
    if (task.id === id) {
      return { ...task, isDone };
    }
    return task;
  });
  res.json({ msg: 'task updated' });
});

// delete task
app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  taskList = taskList.filter((task) => task.id !== id);

  res.json({ msg: 'task removed' });
});

app.use((req, res) => res.status(404).send('Route does not exist'));

//initiate app

const port = process.env.PORT || 5000;

const startApp = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startApp();
