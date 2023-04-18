import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from './services';
import { toast } from 'react-toastify';

// Fetch all Tasks

export const useFetchTasks = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await api.get('/');
      return data;
    },
  });
  return { isLoading, isError, error, data };
};

// Create a Task

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  const { mutate: addTask, isLoading } = useMutation({
    mutationFn: (taskTitle) => api.post('/', { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('task added');
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
  return { addTask, isLoading };
};

// Update a Task
export const useEditTask = () => {
  const queryClient = useQueryClient();
  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => api.patch(`/${taskId}`, { isDone }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
    onError: () => {
      toast.error(error.response.data.message);
    },
  });
  return { editTask };
};

// Delete a Task
export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTask, isLoading: deleteTaskLoading } = useMutation({
    mutationFn: ({ taskId }) => api.delete(`/${taskId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
    onError: () => {
      toast.error(error.response.data.message);
    },
  });
  return { deleteTask, deleteTaskLoading };
};
