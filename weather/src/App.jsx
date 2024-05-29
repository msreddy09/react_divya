import React, { createContext, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
import Parent from './components/Parent';
import { LoginContextProvider } from './LoginUserContext';
import Parent2 from './components/Parent2';
import Form from './components/Form';
import HookForm from './components/HookForm';
import Header from './components/Header';
import Todo from './components/Todo';
import ReactTabs from './components/ReactTabs';

function App() {


  const [tabname, setTabname] = useState('');
  const showTab = (event) => {
    setTabname(event.target.getAttribute('tab'));
  }

  const tabs1 = [{
    tabid: 1, tabname: 'Weather', tabContent: <Header />, disabled: false
  }, {
    tabid: 2, tabname: 'Form', tabContent: <Form />, disabled: false,
  }]

  const tabs2 = [{
    tabid: 1, tabname: 'Parent', tabContent: <Parent />, disabled: false
  }, {
    tabid: 2, tabname: 'Todo', tabContent: <Todo />, disabled: false,
  }]


  return (
    <LoginContextProvider >
      <div className="App">
        <ReactTabs alignment={'left'} tabs={tabs1} defaultTabInd={0} align={'center'} />
        <ReactTabs tabs={tabs2} defaultTabInd={1} />

      </div>
    </LoginContextProvider>
  );
}

export default App;
