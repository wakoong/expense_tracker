import React, { useState } from 'react';
// imports
import Calculator from '../components/Calculator';
import CostBox from '../components/CostBox';
import { defaultTheme } from '../utils/themes';
import { GlobalStyle } from '../utils/Global';
// 3rd-party imports
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 200px 1fr;
  height: calc(100% - 8px);
  padding: 0px !important;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .mode-btn {
    position: absolute;
    top: 0;
    right: 0;
  }

  .header_title {
    font-size: 1.5em;
  }

  .content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 26px;
    width: 75%;
  }
`;

const Summary = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  bottom: -40px;
  height: 80px;
  width: 300px;
  z-index: 10;
  background-color: white;
  padding: 0px !important;

  .cost-block {
    display: grid;
    grid-template-rows: 30px 1fr;
    font-size: 1em;

    .cost_title,
    .cost {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .cost_title.fc {
      background-color: #92cc41;
    }
    .cost_title.vc {
      background-color: #f7d51d;
    }
    .cost {
      color: #21252a;
    }
  }
`;

const Body = styled.div`
  width: 100%;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .body_content {
    margin-top: 40px;
    width: 90%;
  }
`;

export default function Expenses() {
  const [mode, setMode] = useState(true);
  console.log({ mode });
  return (
    <Wrapper className={`nes-container is-rounded`}>
      <Header className={`nes-container ${mode ? '' : 'is-dark'}`}>
        <button
          type="button"
          className={`nes-btn mode-btn ${mode ? 'is-warning' : 'disabled'}`}
          onClick={() => setMode(!mode)}
        >
          {mode ? '🌞' : '🌚'}
        </button>
        <span className="nes-text is-success header_title">
          Available Budget
        </span>
        <div className="content">
          <i className="snes-jp-logo"></i>
          <div>$ 2,000</div>
        </div>
        <Summary className={`nes-container`}>
          <div className="cost-block">
            <div className="cost_title fc">Fixed Cost</div>
            <div className="cost">$1,000</div>
          </div>
          <div className="cost-block">
            <div className="cost_title vc">Variable Cost</div>
            <div className="cost">$2,000</div>
          </div>
        </Summary>
      </Header>
      <Body className={`nes-container ${mode ? '' : 'is-dark'}`}>
        <div className="body_content">
          <progress className="nes-progress" value="90" max="100"></progress>
          <progress
            className="nes-progress is-primary"
            value="80"
            max="100"
          ></progress>
          <progress
            className="nes-progress is-success"
            value="50"
            max="100"
          ></progress>
          <progress
            className="nes-progress is-warning"
            value="30"
            max="100"
          ></progress>
          <progress
            className="nes-progress is-error"
            value="10"
            max="100"
          ></progress>
          <progress
            className="nes-progress is-pattern"
            value="50"
            max="100"
          ></progress>
          <progress className="nes-progress" value="90" max="100"></progress>
          <progress
            className="nes-progress is-primary"
            value="80"
            max="100"
          ></progress>
          <progress
            className="nes-progress is-success"
            value="50"
            max="100"
          ></progress>
          <progress
            className="nes-progress is-warning"
            value="30"
            max="100"
          ></progress>
          <progress
            className="nes-progress is-error"
            value="10"
            max="100"
          ></progress>
          <progress
            className="nes-progress is-pattern"
            value="50"
            max="100"
          ></progress>
        </div>
      </Body>
    </Wrapper>
  );
}
