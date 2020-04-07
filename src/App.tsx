// react imports
import React from 'react';
// imports
import Main from './pages/Main';
import Expenses from './pages/Expenses';
import { GlobalStyle } from './utils/Global';
// 3rd
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Main />
      {/* <Expenses /> */}
      <GlobalStyle />
    </div>
  );
}

export default App;
