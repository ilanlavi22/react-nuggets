import { useContext } from 'react';
import { ThemeContext, UserContext } from '../AppContext';

const Header = () => {
  const { theme, themeSwitch } = useContext(ThemeContext);
  const { user, logOut } = useContext(UserContext);

  return (
    <header className='flex items-center justify-around px-4 py-4 bg-white text-slate-900 dark:bg-slate-800 dark:text-white transition-all duration-150 ease-linear drop-shadow-[0_0_2px_rgba(0,0,0,0.2)]'>
      <h5 className='text-xl font-bold'>
        {user ? `Welcome ${user.name}` : 'Welcome Guest'}
      </h5>
      <div className='flex space-x-8 self-end'>
        <button
          className='bg-[#242424] text-white rounded-[4px] py-2 px-4 dark:bg-[#cecece] dark:text-[#242424] cursor-pointer capitalize'
          onClick={themeSwitch}
        >
          {theme} mode
        </button>
        <button onClick={logOut}>{user ? 'Log out' : 'Log in'}</button>
      </div>
    </header>
  );
};

export default Header;
