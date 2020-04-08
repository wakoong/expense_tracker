// react imports
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// imports
import Main from './pages/Main';
import { Settings } from './pages/Settings';
import Expenses from './pages/Expenses';
import { GlobalStyle } from './utils/Global';
// 3rd
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/expenses">
            <Expenses />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
