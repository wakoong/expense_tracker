import React, { useState } from 'react';
// imports
import Calculator from '../components/Calculator';
import CostBox from '../components/CostBox';
import { defaultTheme } from '../utils/themes';
import { GlobalStyle } from '../utils/Global';
// 3rd-party imports
import styled from 'styled-components';

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = styled(FlexCenter)`
  height: 100%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;

const FixedCostWrapper = styled(FlexCenter)`
  width: calc(100vw - 400px);
  height: 30vh;
  background-color: ${defaultTheme.status.warningColor};
`;

const VariableCostWrapper = styled(FlexCenter)`
  width: calc(100vw - 400px);
  height: 70vh;
  background-color: ${defaultTheme.status.errorColor};
`;

const fixedCost = [
  { label: 'rent', expense: 1505 },
  { label: 'insurance', expense: 60 },
  { label: 'phone', expense: 100 },
];

export default function Expenses() {
  return (
    <Layout>
      <Calculator />
      <div>
        <FixedCostWrapper>
          {fixedCost.map((cost) => (
            <CostBox
              key={cost.label}
              label={cost.label}
              expense={cost.expense}
            />
          ))}
        </FixedCostWrapper>
        <VariableCostWrapper>
          {fixedCost.map((cost) => (
            <CostBox
              key={cost.label}
              label={cost.label}
              expense={cost.expense}
            />
          ))}
        </VariableCostWrapper>
      </div>
    </Layout>
  );
}
