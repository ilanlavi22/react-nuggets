import { UserProvider, ThemeProvider } from './AppContext';
import Header from './components/Header';
function App() {
  return (
    <>
      <ThemeProvider>
        <UserProvider>
          <Header />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
