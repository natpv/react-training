import React, { useState } from "react";
import AppRouter from './AppRouter';
import ThemeSwitch from './components/ThemeSwitch';
import Currency from "./components/Currency";
import { ThemeContext } from './context';
import NavBar  from './containers/NavBar';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./store/store";
import './App.css';

function App() {

  const[ theme, setTheme] = useState("light")

  return (
    <Provider store={appStore}>
      <BrowserRouter>
     <NavBar>
     <ThemeSwitch changeTheme={(t) => setTheme(t)}></ThemeSwitch>
     <Currency />
     </NavBar>
    <div className="container-fluid">
    
      {/* <TestForm></TestForm> */}
     
      <ThemeContext.Provider value={theme}>
        <AppRouter />
      </ThemeContext.Provider>

    </div>
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;
