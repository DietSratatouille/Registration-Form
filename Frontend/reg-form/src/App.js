import React from 'react';
import './App.css';
import CreateUser from "./components/user/CreateUser";
import ListUsers from "./components/user/ListUsers";

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
      {/*<ListUsers/>*/}
    </div>
  );
}

export default App;
