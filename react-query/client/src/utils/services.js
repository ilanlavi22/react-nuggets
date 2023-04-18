import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5000/api/tasks' });

// export const fetchTasks = () => api.get('/').then((response) => response.data);

// export const loadTask = async (id) => {
//   try {
//     const response = await api.get(`/${id}`);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export default api;
