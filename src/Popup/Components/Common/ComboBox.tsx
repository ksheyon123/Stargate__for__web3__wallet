import React, { Dispatch, SetStateAction, useState } from "react";
import { StyledComboBox } from "src/Popup/StyledComponents/ComboBox";
import { ComboBoxItemType } from "src/Popup/Constants/types";
import { classBinder } from "src/Popup/Utils/utils";
interface IProps {
  list: ComboBoxItemType[];
  handleOnClick: Dispatch<SetStateAction<any>>;
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
    <StyledComboBox>
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