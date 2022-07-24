import React, { Dispatch, SetStateAction, useState } from "react";
import { StyledComboBox } from "src/Popup/StyledComponents/ComboBox";
import { ComboBoxItemType } from "src/Popup/Constants/types";

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

  const _firstIdx = {
    value: "No data",
    name: "Select Item"
  };
  const _list = [_firstIdx, ...list];

  const _firstItem = _list[0];
  const _initialName = _firstItem.name;

  const [name, setName] = useState<string | number>(_initialName);

  const handleOnList = (el: ComboBoxItemType) => {
    const {
      value,
      name
    } = el;
    handleOnClick(value);
    setName(name);
  }

  return (
    <StyledComboBox>
      <div className="item">{name}</div>
      {hasNoItem && <div className="no-list">No Data</div>}
      <div className="list">
        {
          !hasNoItem && (
            <ul>

            </ul>
          )
        }
      </div>
    </StyledComboBox>
  )
}

export { ComboBox }