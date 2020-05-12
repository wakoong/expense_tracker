// react imports
import React, { useState, useEffect } from 'react';
// imports
import CostBox from '../CostBox';
import { defaultTheme } from '../../utils/themes';
// 3rd-party components
import styled from 'styled-components';
import EditIcon from '@material-ui/icons/Edit';

const FormBox = styled.div`
  display: grid;
  grid-template-rows: 50px auto;
  height: 400px;
  width: 700px;
  padding: 5px 20px;

  .header {
    margin: 0;
    font-size: 20px;
    line-height: 40px;
    font-weight: bold;
    border-bottom: 1px solid black;
  }

  .body {
    display: grid;
    grid-auto-rows: 50px;

    &_cards {
      grid-template-rows: auto;
    }
    .row {
      display: flex;
      align-items: center;
      padding: 10px 10px;
    }
  }
`;

let fixedCostStorage;
if (window.localStorage.getItem('fixedCost') !== null) {
  fixedCostStorage = window.localStorage.getItem('fixedCost');
  fixedCostStorage = JSON.parse(fixedCostStorage);
} else {
  fixedCostStorage = {};
}

export default function FixedCost() {
  const [value, setValue] = useState({ label: '', expense: '' });
  const [lists, setList] = useState(fixedCostStorage || []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.target;
    setValue({ ...value, [target.name]: target.value });
  };

  // Need to refactor and revisit use of TypeScript here...
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { label, expense } = value;
    console.log('value', value);
    fixedCostStorage[label] = expense;
    window.localStorage.setItem('fixedCost', JSON.stringify(fixedCostStorage));
    console.log('list', lists);
    setList({ ...lists, [label]: expense });
    setValue({ ...value, label: '', expense: '' });
  };

  return (
    <div>
      <FormBox>
        <div className="header">Fixed Costs</div>
        <form className="body" onSubmit={handleSubmit}>
          <div className="row">
            <label>
              Label:
              <input
                type="text"
                name="label"
                value={value.label}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="row">
            <label>
              Expense:
              <input
                type="text"
                name="expense"
                value={value.expense}
                onChange={handleChange}
              />
            </label>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button>Save</button>
          </div>
        </form>
      </FormBox>
      <FormBox>
        <div className="header">Cards</div>
        <div className="body body_cards">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              margin: '15px 0',
            }}
          >
            {Object.keys(lists).map((key) => (
              <CostBox key={key} label={key} expense={lists[key]} />
            ))}
          </div>
        </div>
      </FormBox>
    </div>
  );
}
