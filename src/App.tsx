// react imports
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// imports
import Main from './pages/Main';
import { Settings } from './pages/Settings';
import Expenses from './pages/Expenses';
import { GlobalStyle } from './utils/Global';
// 3rd
import styled from 'styled-components';
import { auth } from './services/firebase';
import { FirebaseDatabaseProvider } from '@react-firebase/database';
import firebase from 'firebase';

function App() {
  return (
    <FirebaseDatabaseProvider firebase={firebase}>
      <div className="App">
        <Helmet>
          <title>Expense Tracker</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
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
    </FirebaseDatabaseProvider>
  );
}

export default App;
