// react imports
import React, { FunctionComponent, useState } from 'react';
// imports
import { useTab } from '../../hooks';
import { PanelProps } from '../../types';
// 3rd-party components
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  height: 100%;
`;

const Tabs = styled.div`
  display: grid;
  grid-auto-rows: 50px;
  height: 90%;
  width: 200px;
  margin: 5px 20px 0 20px;
  align-items: center;
  border: 1px solid black;

  .row {
    height: 100%;
    line-height: 40px;
    padding: 0 5px;
    cursor: pointer;
  }
  .row:hover,
  .row:before {
    background-color: #dce4ef;
  }
`;

const TabPanel = styled.div<{ id: string; activeTab: string }>`
  display: ${(props) => (props.id === props.activeTab ? 'block' : 'none')};
  height: 100%;
`;

// refactor!!
export default function SidePanel(props: PanelProps) {
  const { tabs, children } = props;
  const [activeTab, selectTab] = useTab('0');

  return (
    <Layout>
      <Tabs>
        {tabs.map((tab, idx) => (
          <div
            className="row"
            key={tab}
            id={idx.toString()}
            onClick={selectTab}
          >
            {tab}
          </div>
        ))}
      </Tabs>
      <div>
        {children.map((element, idx) => (
          <TabPanel
            key={`tab-panel-${idx}`}
            id={idx.toString()}
            activeTab={activeTab}
          >
            {element}
          </TabPanel>
        ))}
      </div>
    </Layout>
  );
}
