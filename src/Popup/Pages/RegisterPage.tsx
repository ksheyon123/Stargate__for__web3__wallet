import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Input, Button, HideSeek } from "src/Popup/Components/index";
import { RegisterPageContainer } from "src/Popup/Container/index"
import ic_back from "src/Popup/Assets/back-btn-icon.png";
import { theme } from "src/Popup/Styles/theme";
import { classBinder } from "src/Popup/Utils/utils"
import { PATH } from "../Constants";
import { createWallet } from "src/Web3/iconSdk";
import { toV3 } from "src/Signer/signer";

const StyledWrapper = styled.div<{ process: number; }>`
  width :100%;
  height: 100%;
  overflow: hidden;
  border : 1px solid #AAA;
  & > div.overflow-cards {
    display: flex;
    width : calc(400%);
    height: 100%;
    transition: ease-in 500ms;
    transform: ${props => `translateX(-${360 * props.process}px)`};
    & > div.card {
      width : 360px;
      height : 100%;
      & > div.card-header {
        display: flex;
        align-items: center;
        width : 100%;
        height : 50px;
        padding : 10px;
        & > img {
          width : 10px;
          height : 18px;
          margin-right : 20px;
          cursor: pointer;
        }
      }
      & > div.card-content {
        width : 100%;
        height : calc(100% - 100px);
        padding : 0px 10px 10px 10px;
        & > div.radio-btn-area {
          display: flex;
          align-items: center;
          margin-bottom : 15px;
          &:last-of-type {
            margin-bottom : 0px;
          }
          & > div.radio-btn {
            width :16px;
            height : 16px;
            border: 1px solid ${theme.gray3};
            border-radius : 50%;
            margin-right : 12px;
            &.on {
              background-color : ${theme.green};
              border : none;
            } 
          }
        }
        & > div.card-description {
          ${theme.t2};
        }
        & > div > span {
          ${theme.b3};
        }
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
    setWalletName,
    setPassword,
    setRePassword,
    setProcess,
    setToggle,
    walletName,
    toggle,
    password,
    re_password,
    process
  } = RegisterPageContainer();
  const navigate = useNavigate();

  const handleOnSubmit = async () => {
    try {
      const { privKey } = createWallet();

      const rsp = await toV3(password, privKey);
    } catch (e) {
      throw e;
    }
  }

  return (
    <StyledWrapper process={process}>
      <div className="overflow-cards">
        <div className="card">
          <div className="card-header">
            <img onClick={() => navigate(-1)} src={ic_back} alt="back-icon" />
            <span>Step 1.</span>
            <span>Create / Load Wallet</span>
          </div>
          <div className="card-content">
            <div className="radio-btn-area">
              <div className={classBinder({ prefix: "radio-btn", suffix: "on", cond: toggle === 0 })} />
              <span>Create Wallet</span>
            </div>
            <div className="radio-btn-area">
              <div className={classBinder({ prefix: "radio-btn", suffix: "", cond: toggle === 1 })} />
              <span>Load Wallet</span>
            </div>
          </div>
          <div className="card-bottom">
            <Button
              name="Next"
              handleOnClick={() => setProcess(1)}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img onClick={() => setProcess(0)} src={ic_back} alt="back-icon" />
            <span>Step 2.</span>
          </div>
          <div className="card-content">
            <div className="card-description mgb-20">Create your wallet name</div>
            <div className="card-name">
              <span>Wallet Name</span>
            </div>
            <Input
              value={walletName}
              handleOnChange={setWalletName}
            />
            <div className="card-description mgb-20">set your wallet password</div>
            <div className="card-name">
              <span>Password</span>
            </div>
            <Input
              value={password}
              handleOnChange={setPassword}
            />
            <div className="card-name">
              <span>Password</span>
            </div>
            <Input
              value={re_password}
              handleOnChange={setRePassword}
            />
          </div>
          <div className="card-bottom">
            <Button
              name="Next"
              handleOnClick={() => setProcess(2)}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <img onClick={() => setProcess(0)} src={ic_back} alt="back-icon" />
            <span>Step 2.</span>
          </div>
          <div className="card-content">
            <div className="card-description mgb-20">Save your privatekey</div>
            <div className="card-name">
              <span>Private Key</span>
            </div>
            <div className="flex align-center space-between">
              <HideSeek
                width={240}
                text={"aaaa0AZ"}
              />
              <Button
                name="Copy"
                handleOnClick={() => { }}
              />
            </div>
          </div>
          <div className="card-bottom">
            <Button
              name="Done"
              handleOnClick={async () => {
                await handleOnSubmit().then(() => {
                  navigate(PATH.LOGIN);
                });
              }}
            />
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export { RegisterPage }