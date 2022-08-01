import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "src/Popup/Styles/theme";

interface IProps {
  width?: number;
  text: string;
}

const StyledHideSeek = styled.div<{ width: number }>`
  position : relative;
  display: flex;
  align-items: center;
  width : ${props => props.width}px;
  padding : 10px 15px;
  border :  1px solid ${theme.gray4};
  background-color: ${theme.gray5};
  & > div.btn-area {
    position: absolute;
    width : 16px;
    height : 16px;
    border-radius: 50%;
    border :  1px solid ${theme.gray4};
    right : 20px;
  }
`;

const HideSeek: React.FC<IProps> = (props) => {
  const {
    text,
    width = 240
  } = props;

  const [isActive, setIsActive] = useState<boolean>(true);
  const _convertedTxt = isActive ? text.replaceAll(/[a-z]|[A-Z]|[0-9]/gi, "*") : text;

  return (
    <StyledHideSeek width={width}>
      <span>{_convertedTxt}</span>
      <div
        className="btn-area"
        onClick={() => setIsActive(!isActive)}
      >
        {isActive && (<img />)}
        {!isActive && (<img />)}
      </div>
    </StyledHideSeek>
  )
}

export { HideSeek }