// react imports
import React, { useState } from 'react';
// imports
import Header from '../components/Header';
import Card from '../components/Cards';
import Dropdown from '../components/Dropdown';
import { useToggle } from '../hooks/index';
import { colorPaletteMS } from '../utils/colors';
import { months as data, emojis } from '../utils';
// 3rd-party imports
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Layout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 50px auto;
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

export default function Main() {
  const [months, setMonth] = useState(data);
  const [isOpen, toggleOpen] = useToggle(false);

  const selectMonth = (idx) => {
    const update = months.map((m) =>
      m.id === idx ? { ...m, isSelected: !m.isSelected } : m
    );
    setMonth(update);
  };

  const colorPalette: string[] = Object.keys(colorPaletteMS);
  return (
    <Layout>
      <Header title="Expense Tracker" link="settings">
        <div style={{ position: 'relative' }}>
          <ArrowDropDownIcon onClick={toggleOpen} />
          {isOpen && <Dropdown />}
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
