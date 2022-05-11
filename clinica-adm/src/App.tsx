import React from 'react';
import AppProvider from './contexts';
import Home from './pages/home';
import { Router } from './routes/router';

function App() {
  return (
    /*    <div className="App">
   
       </div> */
    <AppProvider>
      <Router />
    </AppProvider>

  );
}

export default App;
