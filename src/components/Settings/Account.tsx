// react imports
import React, { useState } from 'react';
// imports
import { defaultTheme } from '../../utils/themes';
// 3rd-party components
import styled from 'styled-components';
import EditIcon from '@material-ui/icons/Edit';

const AccountBox = styled.div`
  display: grid;
  grid-template-rows: 50px auto;
  height: 200px;
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
    grid-template-rows: auto;

    .row {
      display: grid;
      grid-template-columns: 2fr 5fr 1fr;
      align-items: center;
      /* display: flex;
      justify-content: space-between;
      align-items: center; */
      border-bottom: 1px solid black;
      padding: 10px 10px;

      .edit {
        display: flex;
        cursor: pointer;
        margin-right: 5px;
        color: ${defaultTheme.primaryColor};

        & > div:first-child {
          visibility: hidden;

          & > svg {
            font-size: 1em;
          }
        }
      }
    }

    .row:hover {
      background-color: ${defaultTheme.textFieldBackground};
    }
    .row:hover .edit > div {
      visibility: visible;
      text-decoration: underline;
      margin-right: 5px;
    }
  }
`;

// props - name, email
export default function Account() {
  return (
    <AccountBox>
      <div className="header">General Account Setting</div>
      <div className="body">
        <div className="row">
          <div>Name</div>
          <div>Woosik Koong</div>
          <div className="edit">
            <div>
              <EditIcon />
            </div>
            <div>Edit</div>
          </div>
        </div>
        <div className="row">
          <div>Email</div>
          <div>woosik.koong@gmail.com</div>
          <div>edit</div>
        </div>
      </div>
    </AccountBox>
  );
}
