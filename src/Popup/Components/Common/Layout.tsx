import React, { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "src/Popup/Components/index";

const StyledLayout = styled.div`
  width : 100%;
  height : 100%;
  border : 1px solid #AAA;
`;

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  )
}

export { Layout }