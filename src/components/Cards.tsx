// react imports
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// imports
import { colorPaletteMS } from '../utils';
import Emoji from './Emojis';
// 3rd-party imports
import styled from 'styled-components';

/*
Style
1) Size - sm, md, lg
*/

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = styled(FlexCenter)<{ color: string }>`
  background-color: ${(props) =>
    props.color === 'default' ? '#f3f2f1' : colorPaletteMS[props.color]};
  cursor: pointer;
  height: 100%;
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  height: 100%;
  width: 100%;

  &:nth-child(1) {
    justify-content: center;
  }

  .emoji {
    font-size: 2em;
    margin-top: 10px;
    justify-content: center;
  }
`;

export default function Card({ color, val, emoji, select }) {
  return (
    <Layout color={color} onClick={select}>
      {color === 'default' ? (
        <Content>
          <Emoji symbol={emoji.symbol} label={emoji.label} />
          <div className="cost">+ $700</div>
          <Link to="/expenses" target="_blank">
            Track your expense: {'📝'}
          </Link>
        </Content>
      ) : (
        <Fragment>{val}</Fragment>
      )}
    </Layout>
  );
}
