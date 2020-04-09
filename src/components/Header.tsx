// react imports
import React, { FunctionComponent } from 'react';
// imports
import { HeaderProps } from '../types';
import { useToggle } from '../hooks/index';
// 3rd-party imports
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  padding: 5px 20px;
  font-size: 1.5em;

  .icons-wrapper {
    display: flex;
    justify-content: flex-end;

    .icon {
      height: 100%;
      cursor: pointer;
      align-items: center;
    }

    svg {
      display: block;
      height: 100%;
      font-size: 1.5em;
    }
  }
`;

const Header: FunctionComponent<HeaderProps> = ({ title, link, children }) => {
  return (
    <Layout>
      <div>{title}</div>
      <div className="icons-wrapper">
        <div className="icon">{children}</div>
      </div>
    </Layout>
  );
};

export default Header;
