import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { StyledInput } from "src/Popup/StyledComponents/Input";
import { theme } from "src/Popup/Styles/theme";

interface IProps {
  value: string | number | null;
  handleOnChange: Dispatch<SetStateAction<string | number>>;
  placeholder?: string;
  title?: string;
  error?: string;
}

const InputWRapper = styled.div`
  position : relative;
  & > div.txt-error {
    position: absolute;
    color : ${theme.red};
  }
`;

const Input: React.FC<IProps> = (props) => {
  const {
    value,
    handleOnChange,
    placeholder = "",
    title = "",
    error = ""
  } = props;
  const _value = !!value ? value : "";

  return (
    <InputWRapper>
      {!!title && <div>{title}</div>}
      <StyledInput
        value={_value}
        onChange={(e) => handleOnChange(e.target.value)}
        placeholder={placeholder}
      />
      {!!error && <div className="txt-error">{error}</div>}
    </InputWRapper>

  )
}

export {
  Input
}