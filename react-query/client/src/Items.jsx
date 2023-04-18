import SingleItem from './components/SingleItem';
import { useFetchTasks } from './utils/queryCustomHooks';

const Items = () => {
  const { isLoading, error, data } = useFetchTasks();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className='items'>
      {data?.taskList?.map((item) => (
        <SingleItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Items;
