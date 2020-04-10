// react imports
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// imports
import Modal from './Modal';
import GithubRegisterButton from './Buttons/Github';
import GoogleRegisterButton from './Buttons/Google';
import { useToggle } from '../hooks/index';
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

const Login = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4fr 4fr 1fr;
  height: 100%;
  text-align: center;

  button {
    cursor: pointer;
  }
`;

// Need to refactor the component to make it more reusable
// Sizes, options etc.
export default function Dropdown() {
  const [showModal, toggleModal] = useToggle(false);
  return (
    <Layout>
      <ul className="menu">
        <li className="item" onClick={toggleModal}>
          Login
        </li>
        {showModal ? (
          <Modal>
            <Login>
              {/* <div className="register"> */}
              <h3>
                {'🤑'}Join Expense Tracker{'🤑'}
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '70%',
                  margin: '0 auto',
                }}
              >
                <GithubRegisterButton />
                <GoogleRegisterButton />
              </div>
              {/* </div> */}
              <button onClick={toggleModal}>close</button>
            </Login>
          </Modal>
        ) : null}
        <Link to="/settings">
          <li className="item">Settings</li>
        </Link>
      </ul>
    </Layout>
  );
}
