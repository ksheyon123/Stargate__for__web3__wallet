import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { ComboBoxItemType } from "src/Popup/Constants/types";
import { classBinder } from "src/Popup/Utils/utils";
import ic_down from 'src/Popup/Assets/01-icon-20-px-arrow-down@2x.png';
import ic_up from 'src/Popup/Assets/01-icon-20-px-arrow-up@2x.png';
import ic_check from "src/Popup/Assets/ic_check.png";
import { theme } from 'src/Popup/Styles/theme';

interface IProps {
  list: ComboBoxItemType[];
  handleOnClick: Dispatch<SetStateAction<any>>;
}

const StyledComboBox = styled.div<{ toggle: boolean; }>`
  ${theme.c1};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border : 1px solid ${theme.gray4};
  border-radius : 10px;
  background-color : transparent;
  width : 160px;
  height : 30px;
  padding : 2px 8px;
  & > div.item {
    width : 100%;
    color : #222;
    padding-right : 20px;
    background : url(${ic_down}) center right -2px no-repeat;
    background-size : 15px 15px;
    ${props => props.toggle && `
    background : url(${ic_up}) center right -2px no-repeat;
    background-size : 15px 15px;
    `}
  }
  & > div.no-list {
    position: absolute;
    color : #8A8A8A;
    top : 45px;
    border : 1px solid #AAA;
    width : 240px;
    padding : 10px 15px;
    border-radius : 10px;
  }
  & > div.drop-container {
    position: absolute;
    width : 240px;
    padding : 16px 0px;
    top : 35px;
    right : 0px;
    z-index : 1000;
    display: none;
    background-color : #FFF;
    border-radius: 4px;
    box-shadow : 0px 3px 10px 0px rgba(0, 0, 0, 0.15);
    & > div.drop-title {
      ${theme.t2};
      text-align: center;
    }
    & > ul {
      padding : 0px 5px;
      & > li {
        padding :10px 24px;
        &.active {
        padding :10px 24px;
          ${theme.b2};
          background : url(${ic_check}) center left 6px no-repeat;
          background-size : 16px 16px;
        }
      }
    }
    & > div.add-network {
      margin-top : 16px;
      padding-top : 16px;
      border-top : 1px solid #AAA;
      & > div.add-btn {
        ${theme.b3};
        color : #037dd6;
        padding : 12px 16px;
        margin : 0px 20px;
        border-radius: 15px;
        border : 1px solid #037dd6;
        text-align: center;
        cursor: pointer;
      }
    }
    &.active {
      display: block;
    }

  }
`;

const StyledDivider = styled.div`
  width : 100%;
  margin : 16px 0px;
  border-bottom : 1px solid #AAA;
`;

const Divider: React.FC = () => {
  return (
    <StyledDivider />
  )
}

const ComboBox: React.FC<IProps> = (props) => {

  const {
    list,
    handleOnClick
  } = props;

  const hasNoItem = list.length === 0;

  const _firstItem = {
    value: "No data",
    name: "Select Item"
  };
  const _list = [...list];

  const _initialName = _firstItem.name;

  const [name, setName] = useState<string | number>(_initialName);
  const [selectedIdx, setSelectedIdx] = useState<number>(-1);
  const [toggle, setToggle] = useState<boolean>(false);

  const handleOnList = (el: ComboBoxItemType, idx: number) => {
    const {
      value,
      name
    } = el;
    handleOnClick(value);
    setName(name);
    setToggle(false);
    setSelectedIdx(idx)
  }

  return (
    <StyledComboBox toggle={toggle} >
      <div
        onClick={() => setToggle(!toggle)}
        className="item">
        <span>{name}</span>
      </div>
      {hasNoItem && <div className="no-list">No Data</div>}
      {
        toggle && (
          <div className={classBinder({ prefix: "drop-container", suffix: "active", cond: toggle })}>
            <div className="drop-title">
              Network
            </div>
            <Divider />
            {
              !hasNoItem && (
                <ul>
                  {
                    _list.map((el: any, idx: number) => {
                      const {
                        name
                      } = el;
                      return (
                        <li
                          key={idx.toString()}
                          className={classBinder({ prefix: "", suffix: "active", cond: selectedIdx === idx })}
                          onClick={() => handleOnList(el, idx)}>{name}</li>
                      )
                    })
                  }
                </ul>
              )
            }
            <div className="add-network">
              <div className="add-btn">
                Add New Network
              </div>
            </div>
          </div>
        )
      }

    </StyledComboBox>
  )
}

export { ComboBox }