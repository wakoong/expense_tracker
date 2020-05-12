// react imports
import React from 'react';
import { Link } from 'react-router-dom';
// imports
import Header from '../components/Header';
import SidePanel from '../components/Panels/SidePanel';
import Account from '../components/Settings/Account';
import FixedCost from '../components/Settings/FixedCost';
// 3rd-party imports
import styled from 'styled-components';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Layout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 50px auto;
`;

export function Settings() {
  return (
    <Layout>
      <Header title="Settings" link="">
        <Link to="/">
          <ExitToAppIcon />
        </Link>
      </Header>
      <div>
        <SidePanel tabs={['Account', 'Fixed Cost', 'Variable Cost']}>
          <FixedCost />
          <Account />

          <div>2</div>
        </SidePanel>
      </div>
    </Layout>
  );
}
