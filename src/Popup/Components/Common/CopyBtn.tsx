import React from 'react';
import styled from "styled-components";
import { theme } from 'src/Popup/Styles/theme';
import ic_copy from 'src/Popup/Assets/01-icon-16-px-copy@2x.png';

interface IProps {
  name: string;
  handleOnClick: () => void;
  disabled?: boolean;
}

const StyledCopyBtn = styled.button`
  display: flex;
  border : none;
  padding : 4px 20px 4px 8px;
  background : url(${ic_copy}) center right 6px no-repeat;
  background-size : 12px 12px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color : ${theme.primary};
    background-color: rgba(243,150,159, 0.3);
    border-radius: 15px;
  }
`;

const CopyBtn: React.FC<IProps> = (props) => {

  const {
    name,
    handleOnClick,
    disabled = false
  } = props;

  return (
    <StyledCopyBtn disabled={disabled} onClick={() => handleOnClick()}>
      {name}
    </StyledCopyBtn>
  )
}

export { CopyBtn }

