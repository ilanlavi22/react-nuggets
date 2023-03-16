import useFetch from './api/useFetch';

const url = 'https://api.github.com/users';

const FetchUsers = () => {
  const { isLoading, isError, data: users } = useFetch(url);

  const getUsers = () => {
    return users.map((user) => {
      const { id, login, avatar_url } = user;
      return (
        <div
          key={id}
          className=' bg-white flex flex-col my-4 p-4 drop-shadow-sm rounded-md text-sm leading-6'
        >
          <h4 className='font-bold'>{login.toUpperCase()}</h4>
          <img src={avatar_url} alt={login} />
        </div>
      );
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }
  return (
    <section className=' bg-slate-200 p-4'>
      <div className='grid grid-cols-3col gap-5 mx-auto justify-center'>
        {getUsers()}
      </div>
    </section>
  );
};

export default FetchUsers;
