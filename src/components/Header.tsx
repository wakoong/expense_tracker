// react imports
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
// imports
import { HeaderProps } from '../types';
// 3rd-party imports
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  padding: 5px 20px;

  .icons-wrapper {
    display: flex;
    justify-content: flex-end;
  }
`;

const Header: FunctionComponent<HeaderProps> = ({ title, link, children }) => {
  return (
    <Layout>
      <div>{title}</div>
      <div className="icons-wrapper">
        <Link to={`/${link}`}>{children}</Link>
      </div>
    </Layout>
  );
};

export default Header;
