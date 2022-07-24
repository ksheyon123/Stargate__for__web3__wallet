import React, { ReactNode } from "react";
import { StyledLayout } from "src/Popup/StyledComponents/Popup";
import { Header } from "src/Popup/Components/index"
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  )
}

export { Layout }