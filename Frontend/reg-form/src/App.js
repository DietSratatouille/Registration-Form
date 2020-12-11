import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateUser from "./components/user/CreateUser";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn some mf react*/}
      {/*  </a>*/}
      {/*</header>*/}



      <CreateUser/>

    </div>
  );
}

export default App;
