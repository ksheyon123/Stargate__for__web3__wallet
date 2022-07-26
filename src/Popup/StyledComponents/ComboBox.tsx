import styled from "styled-components";

const StyledComboBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width : 180px;
  border : 1px solid #AAA;
  border-radius : 10px;
  background-color : #FFF;
  & > div.item {
    padding : 10px 15px;
    color : #222;
  }
  & > div.no-list {
    position: absolute;
    color : #8A8A8A;
    top : 45px;
    border : 1px solid #AAA;
    width : 120px;
    padding : 10px 15px;
    border-radius : 10px;
  }
  & > div.list {
    position: absolute;
    width : 180px;
    top : 45px;
    left : 0px;
    display: none;
    background-color : #FFF;
    border : 1px solid #AAA;
    & > ul {
      & > li {
        padding :10px 5px;
      }
    }
    &.active {
      display: block;
    }
  }
`;

export {
  StyledComboBox
}