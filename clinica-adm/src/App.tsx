import React, { useState } from 'react';
import AppProvider from './contexts';
import Home from './pages/home';
import { Router } from './routes/router';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './components/global-style/themes';
import { GlobalStyles } from './components/global-style/globalStyles';

function App() {

  // const [theme, setTheme] = useState('lightTheme');
  /*   const themeToggler = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
    }
   */
  return (
    /*    <div className="App">
   
       </div> */

    <AppProvider>
      <GlobalStyles />
      <Router />
    </AppProvider>
  );
}

export default App;
