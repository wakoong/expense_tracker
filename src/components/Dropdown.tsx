// react imports
import React from 'react';
import { Link } from 'react-router-dom';
// imports
import { defaultTheme } from '../utils/themes';
// 3rd-party imports
import styled from 'styled-components';

const Layout = styled.div`
  position: absolute;
  right: 0;
  width: 200px;
  height: 250px;
  background-color: white;
  font-size: 16px;
  z-index: 5;

  .menu {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    height: 100%;
    margin: 0;
    padding: 10px;

    a,
    .item {
      display: flex;
      align-items: center;
      list-style: none;
      border-bottom: 1px solid black;
    }
    a:hover,
    .item:hover {
      background-color: ${defaultTheme.textFieldBackground};
    }
  }
`;

// Need to refactor the component to make it more reusable
// Sizes, options etc.
export default function Dropdown() {
  return (
    <Layout>
      <ul className="menu">
        <li className="item">Login</li>
        <Link to="/settings">
          <li className="item">Settings</li>
        </Link>
      </ul>
    </Layout>
  );
}
