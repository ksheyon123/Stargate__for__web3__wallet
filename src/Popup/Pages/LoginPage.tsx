import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  Input,
  Button
} from "src/Popup/Components/index"
import { LoginPageContainer } from "src/Popup/Container/index";
import { PATH } from "src/Popup/Constants/index";
const StyledWrapper = styled.div`
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width :100%;
  height: 100%;
  & > button {
    margin-top: 15px;
  }
  & > div.link {
    margin-top : 15px;
    & > span {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const LoginPage: React.FC = () => {
  const {
    loginVale,
    setLoginValue,
    handleOnLogin
  } = LoginPageContainer();
  const navigate = useNavigate();

  return (
    <StyledWrapper>
      <Input
        value={loginVale as string}
        handleOnChange={setLoginValue}
      />
      <Button
        name="잠금 해제"
        handleOnClick={handleOnLogin}
      />
      <div className="link">
        <span onClick={() => navigate(PATH.REGISTER)}>계정 생성</span>
      </div>
    </StyledWrapper>
  )
}

export { LoginPage }