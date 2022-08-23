import React from "react";
import styled from "styled-components";
import { theme } from 'src/Popup/Styles/theme';
import { ComboBox } from "src/Popup/Components/index";
import { HeaderContainer } from "src/Popup/Container/index";

const StyledHeader = styled.div`
  position: fixed;
  top : 0px;
  display: flex;
  align-items: center;
  width : 360px;
  height : 60px;
  background-color: ${theme.headerBg};
  padding : 10px;
  & > div.logo-box {
    width : 34px;
    height : 32px;
    border-radius: 50%;
    background-color : #000;
    cursor : pointer;
    margin-right : 15px;
  }
  & > div.combobox-box {
    display: flex;
    align-items: center;
    flex : 1 1 auto;
    flex-flow : row nowrap;
    justify-content: flex-end;
  }
`;

const Header: React.FC = () => {

  const {
    setNetworkId,
    items
  } = HeaderContainer();

  return (
    <StyledHeader className="app-header">
      <div className="logo-box">
        <img />
      </div>
      <div className="combobox-box">
        <ComboBox list={items} handleOnClick={setNetworkId} />
      </div>
    </StyledHeader>
  )
}

export { Header }