import styled from "styled-components";

const StyledHeader = styled.div`
  width : 100%;
  padding : 15px 10px;
  background-color: #AAA;
`;

const StyledLayout = styled.div`
  width : 100%;
  height : 100%;
  border : 1px solid #AAA;
  ${StyledHeader} {
    
  }
`;



export {
  StyledLayout,
} 