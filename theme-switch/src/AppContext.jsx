import { useContext, createContext, useState, useEffect } from 'react';

// Create a context object
export const ThemeContext = createContext('');
export const UserContext = createContext('');

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const themeSwitch = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'John', age: 32 });

  const logOut = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
