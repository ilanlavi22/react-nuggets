import axios from 'axios';

//const api = axios.create({ baseURL: 'http://localhost:5000/api/tasks' });

// const api = axios.create({
//   baseURL: 'https://react-query-server-kkv2.onrender.com',
// });
const api = axios.create({ baseURL: import.meta.env.VITE_APP_BASE_URL });

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
