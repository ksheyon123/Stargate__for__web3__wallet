import React from "react";
import { StyledHeader } from "src/Popup/StyledComponents/Popup";
import { ComboBox } from "src/Popup/Components/index";
const Header: React.FC = () => {
  return (
    <StyledHeader>
      <ComboBox list={[]} handleOnClick={() => { }} />
    </StyledHeader>
  )
}

export { Header }