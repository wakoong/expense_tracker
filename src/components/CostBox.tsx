import React, { useState } from 'react';
// imports
import { darkTheme } from '../utils/themes';
// 3rd-party imports
import styled from 'styled-components';

const Layout = styled.div`
  height: 100px;
  width: 100px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  border: 1px solid black;
  margin-right: 5px;
`;

const Expense = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled(Expense)`
  color: ${darkTheme.textColorOnPrimary};
  background-color: ${darkTheme.textFieldBackground};
  border-bottom: 1px solid black;
`;

type Props = {
  label: string;
  expense: number;
};

export default function CostBox({ label, expense }: Props) {
  return (
    <Layout>
      <Label>{label}</Label>
      <Expense>${expense}</Expense>
    </Layout>
  );
}
