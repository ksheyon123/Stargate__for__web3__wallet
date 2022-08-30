import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding-top : 10px;
  & > div.wallet-overview {
    width : 100%;
    & > div.wallet-overview__balance {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

const HomeBalanceWrapper: React.FC = () => {
  return (
    <StyledWrapper>
      <div className="wallet-overview">
        <div className="wallet-overview__balance">
          <img />
          <div>

          </div>
        </div>
        <div className="wallet-oveview__buttons">

        </div>
      </div>
    </StyledWrapper>
  )
}

export { HomeBalanceWrapper }