import React from "react";
import styled from "styled-components";
import { Input, Button } from "src/Popup/Components/index";
import { RegisterPageContainer } from "src/Popup/Container/index"
import { classBinder } from "src/Popup/Utils/utils";
const StyledWrapper = styled.div<{ process: number; }>`
  width :100%;
  height: 100%;
  overflow: hidden;
  border : 1px solid #AAA;
  & > div.overflow-cards {
    display: flex;
    width : calc(300%);
    height: 100%;
    transition: ease-in 500ms;
    transform: ${props => `translateX(-${360 * props.process}px)`};
    & > div.card {
      width : 360px;
      height : 100%;
      & > div.card-header {
        width : 100%;
        height : 50px;
        padding : 10px;
      }
      & > div.card-content {
        width : 100%;
        height : calc(100% - 100px);
        padding : 0px 10px 10px 10px;
      }
      & > div.card-bottom {
        width : 100%;
        height : 50px;
        padding : 00px 10px 10px 10px;
      }
    }
  }
`;

const RegisterPage: React.FC = () => {

  const {
    setPassword,
    setRePassword,
    setProcess,
    password,
    re_password,
    process
  } = RegisterPageContainer();

  return (
    <StyledWrapper process={process}>
      <div className="overflow-cards">
        <div
          className="card"
        >
          <div className="card-header">
            Step 1.
          </div>
          <div className="card-content">

          </div>
          <div className="card-bottom">
            <Button
              name="Next"
              handleOnClick={() => setProcess(1)}
            />
          </div>
        </div>
        <div
          className="card"
        >
          <div className="card-header">
            Step 2.
          </div>
          <div className="card-content">

          </div>
          <div className="card-bottom">
            <Button
              name="Prev"
              handleOnClick={() => setProcess(0)}
            />
            <Button
              name="Next"
              handleOnClick={() => setProcess(2)}
            />
          </div>
        </div>
        <div
          className="card"
        >
          <div className="card-header">
            Step 3.
          </div>
          <div className="card-content">

          </div>
          <div className="card-bottom">
            <Button
              name="Prev"
              handleOnClick={() => setProcess(1)}
            />
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export { RegisterPage }