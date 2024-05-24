import React, { createContext } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
import Parent from './components/Parent';
import {LoginContextProvider} from './LoginUserContext';
import Parent2 from './components/Parent2';

function App() {

  return (
    <LoginContextProvider >
      <div className="App">
        <Parent  />
        <Parent2/>
      </div>
    </LoginContextProvider>
  );
}

export default App;
