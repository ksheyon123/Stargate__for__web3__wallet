import React from "react";
import { StyledHeader } from "src/Popup/StyledComponents/Popup";
import { ComboBox } from "src/Popup/Components/index";
import { HeaderContainer } from "src/Popup/Container/index";

const Header: React.FC = () => {

  const {
    setNetworkId,
    items
  } = HeaderContainer();

  return (
    <StyledHeader>
      <ComboBox list={items} handleOnClick={setNetworkId} />
    </StyledHeader>
  )
}

export { Header }