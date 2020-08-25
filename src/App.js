import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Main from './Pages/Main';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route 
        path="/todo-list"
        exact
        component={()=><Main></Main>}
          >

          </Route>
          <Redirect  from="/" to="/todo-list"></Redirect>
      </Switch>
    </Router>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
