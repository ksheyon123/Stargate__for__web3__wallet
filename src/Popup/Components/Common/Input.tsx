import React, { Dispatch, SetStateAction } from "react";
import { StyledInput } from "src/Popup/StyledComponents/Input";

interface IProps {
  value: string | number | null;
  handleOnChange: Dispatch<SetStateAction<string | number>>;
  placeholder?: string;
}

const Input: React.FC<IProps> = (props) => {
  const {
    value,
    handleOnChange,
    placeholder = ""
  } = props;
  const _value = !!value ? value : "";

  return (
    <StyledInput
      value={_value}
      onChange={(e) => handleOnChange(e.target.value)}
      placeholder={placeholder}
    />
  )
}

export {
  Input
}