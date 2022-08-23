import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { ComboBoxItemType } from "src/Popup/Constants/types";
import { classBinder } from "src/Popup/Utils/utils";
import ic_down from 'src/Popup/Assets/01-icon-20-px-arrow-down@2x.png';
import ic_up from 'src/Popup/Assets/01-icon-20-px-arrow-up@2x.png';
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
  justify-content: flex-start;
  align-items: center;
  border : 1px solid ${theme.gray4};
  border-radius : 10px;
  background-color : transparent;
  padding : 1px;
  & > div.item {
    color : #222;
    margin : 2px 12px;
    padding-right : 20px;
    ${props => props.toggle ? `
    
    ` : `
    `}
    background : url(${ic_down}) center right 20px no-repeat;
    background-size : 20px 20px;
  }
  & > div.no-list {
    position: absolute;
    color : #8A8A8A;
    top : 45px;
    border : 1px solid #AAA;
    width : 120px;
    padding : 10px 15px;
    border-radius : 10px;
  }
  & > div.list {
    position: absolute;
    width : 180px;
    top : 45px;
    left : 0px;
    display: none;
    background-color : #FFF;
    border : 1px solid #AAA;
    & > ul {
      & > li {
        padding :10px 5px;
      }
    }
    &.active {
      display: block;
    }
  }
`;

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
  const [toggle, setToggle] = useState<boolean>(false);

  const handleOnList = (el: ComboBoxItemType) => {
    const {
      value,
      name
    } = el;
    handleOnClick(value);
    setName(name);
    setToggle(false);
  }

  return (
    <StyledComboBox
      toggle={toggle}
    >
      <div
        onClick={() => setToggle(!toggle)}
        className="item">
        <span>{name}</span>
      </div>
      {hasNoItem && <div className="no-list">No Data</div>}
      {
        toggle && (
          <div className={classBinder({ prefix: "list", suffix: "active", cond: toggle })}>
            {
              !hasNoItem && (
                <ul>
                  {
                    _list.map((el) => {
                      const {
                        name
                      } = el;
                      return (
                        <li onClick={() => handleOnList(el)}>{name}</li>
                      )
                    })
                  }
                </ul>
              )
            }
          </div>
        )
      }

    </StyledComboBox>
  )
}

export { ComboBox }