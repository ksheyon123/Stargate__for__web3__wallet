import React from "react";
import styled from "styled-components";
import { CopyBtn } from "src/Popup/Components/index";
import { theme } from 'src/Popup/Styles/theme';
import ic_nothing from 'src/Popup/Assets/nothing.png';

const StyledPage = styled.div`
  margin-top : 60px;
  width : 100%;
  height : calc(100% - 60px);
  overflow : scroll;
  & > div.logged-in-info {
    display: grid;
    grid-template-columns: 30% minmax(30%, 1fr) 30%;
    -webkit-column-gap: 5px;
    -moz-column-gap: 5px;
    column-gap: 5px;
    padding: 0 8px;
    border-bottom: 1px solid ${theme.gray4};
    height: 64px;
    & > div {
      display: flex;
      align-items: center;
    }
    & > div:nth-child(1) {
      ${theme.c1};
      justify-content: flex-start;
      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width : 100%;
        height : 25px;
        padding : 5px 5px 5px 20px;
        background : url(${ic_nothing}) center left 5px no-repeat;
        background-size : 16px 16px;
        &:hover {
          cursor : pointer;
          color : ${theme.primary};
          background-color: rgba(243,150,159, 0.3);
          border-radius : 15px;
        }
      }
    }
    & > div:nth-child(2) {
      flex-direction: column;
      justify-content: center;
    }
    & > div:nth-child(3) {
      ${theme.t2};
      justify-content: flex-end;
      & > div {
        cursor: pointer;
      }
    }
  }
`;

const WalletPage_1: React.FC = () => {
  return (
    <StyledPage>
      <div className="logged-in-info">
        <div>
          <div>
            Connected
          </div>
        </div>
        <div>
          <div>
            Address
          </div>
          <div>
            <CopyBtn name="Address" handleOnClick={() => { }} />
          </div>
        </div>
        <div>
          <div>
            :
          </div>
        </div>
      </div>
    </StyledPage>
  )
}

export { WalletPage_1 };

