import useFetch from './api/useFetch';
const url = 'https://api.github.com/users/QuincyLarson';

const FetchUser = () => {
  const { isLoading, isError, data: user } = useFetch(url);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }
  const { avatar_url, name, company, bio } = user;

  return (
    <section className='bg-slate-200 p-4'>
      <div className=' bg-white max-w-[500px] mx-auto flex flex-col m-4 p-4 drop-shadow-sm rounded-md text-sm leading-6 space-y-1'>
        <h4 className='font-bold'>{name}</h4>
        <h5 className='font-light text-xs'>{company}</h5>
        <img src={avatar_url} alt={name} />
        <p>{(bio && bio) || 'Bio...'}</p>
      </div>
    </section>
  );
};

export default FetchUser;
