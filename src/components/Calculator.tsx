// react
import React, { useState } from 'react';
// my imports
import { GlobalStyle } from '../utils/Global';
import { defaultTheme } from '../utils/themes';

// third-party imports
import styled from 'styled-components';

const Layout = styled.div`
  width: 400px;
  height: 100vh;
  display: grid;
  grid-template-rows: 75px auto;
`;

const ResultRow = styled.div`
  background-color: ${defaultTheme.textFieldBackground};
  font-size: 2.5em;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 5px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
`;

const Button = styled.button`
  color: ${defaultTheme.primaryColor};
  width: 100%;
  height: 100%;
  font-size: 1.5em;
  padding: 0.25em 1em;
  border: 2px solid ${defaultTheme.primaryColor};

  &:hover {
    color: ${defaultTheme.textFieldBackground};
    background-color: ${defaultTheme.primaryColor};
    cursor: pointer;
  }
`;

const symbols = new Set(['+', '-', '/', 'X', '=']);

export default function Calculator() {
  const [output, setOutput] = useState(0);
  const [num, setNumber] = useState(0);
  const [symbol, setSymbol] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const target = e.currentTarget.textContent as string;
    if (symbols.has(target)) {
      setSymbol(target);
    } else {
      const val = parseInt(target);
      setNumber(val);
    }
  };

  const handleCalculation = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const val = e.currentTarget.textContent as string;
    if (val === '+') {
      setOutput(output + num);
    }
    if (val === '-') {
      setOutput(output - num);
    }
    if (val === '%') {
      setOutput(output / num);
    }
    if (val === 'X') {
      setOutput(output * num);
    }
    if (val === '=') {
      setOutput(num);
    }
    if (val === 'AC') {
      setNumber(0);
      setOutput(0);
    }
    // setNumber(0);
  };
  console.log('result', num, output);
  return (
    <Layout>
      <ResultRow>{num === 0 ? output : num}</ResultRow>
      <Row>
        <Button onClick={handleCalculation}>AC</Button>
        <Button>+/-</Button>
        <Button onClick={handleCalculation}>%</Button>
        <Button>pct</Button>
      </Row>
      <Row>
        <Button onClick={handleClick}>7</Button>
        <Button onClick={handleClick}>8</Button>
        <Button onClick={handleClick}>9</Button>
        <Button onClick={handleCalculation}>X</Button>
      </Row>
      <Row>
        <Button onClick={handleClick}>4</Button>
        <Button onClick={handleClick}>5</Button>
        <Button onClick={handleClick}>6</Button>
        <Button onClick={handleCalculation}>-</Button>
      </Row>
      <Row>
        <Button onClick={handleClick}>1</Button>
        <Button onClick={handleClick}>2</Button>
        <Button onClick={handleClick}>3</Button>
        <Button onClick={handleCalculation}>+</Button>
      </Row>
      <Row>
        <div>{''}</div>
        <Button>0</Button>
        <Button>.</Button>
        <Button onClick={handleCalculation}>=</Button>
      </Row>
    </Layout>
  );
}
