import React from "react";
import { StyledButton } from "src/Popup/StyledComponents/Button";

interface IProps {
  name: string;
  handleOnClick: () => void;
}

const Button: React.FC<IProps> = (props) => {
  const {
    name,
    handleOnClick,
  } = props;

  return (
    <StyledButton onClick={() => handleOnClick()}>
      <span>{name}</span>
    </StyledButton>
  )
}

export {
  Button
}