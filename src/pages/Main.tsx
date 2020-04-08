// react imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// imports
import { Settings } from './Settings';
import Card from '../components/Cards';
import { colorPaletteMS } from '../utils/colors';
import { months as data, emojis } from '../utils';
// 3rd-party imports
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';
import SettingsIcon from '@material-ui/icons/Settings';

const Layout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 50px auto;
  font-size: 1.5em;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  padding: 5px 20px;

  .settings {
    display: flex;
    justify-content: flex-end;
  }
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

export default function Main() {
  const [months, setMonth] = useState(data);

  const selectMonth = (idx) => {
    const update = months.map((m) =>
      m.id === idx ? { ...m, isSelected: !m.isSelected } : m
    );
    setMonth(update);
  };

  console.log('months', months);

  const colorPalette: string[] = Object.keys(colorPaletteMS);
  return (
    <Layout>
      <Header>
        <div>ExpenseTracker</div>
        <div className="settings">
          <Link to="/settings">
            <SettingsIcon />
          </Link>
        </div>
      </Header>
      <Body>
        {colorPalette.map((val, idx) => (
          <ReactCardFlip
            isFlipped={months[idx].isSelected}
            flipDirection="vertical"
            key={colorPaletteMS[val]}
          >
            <Card
              val={val}
              color={val}
              emoji={emojis[idx]}
              select={() => selectMonth(idx)}
            />
            <Card
              val="test"
              color="default"
              emoji={emojis[idx]}
              select={() => selectMonth(idx)}
            />
          </ReactCardFlip>
        ))}
      </Body>
    </Layout>
  );
}
