import { useState } from 'react';
import { useSetRecoilState } from "recoil";
import { networkIdState } from "src/Popup/States/atom";
import { NETWORKS } from "src/Popup/Constants/index";
import { ComboBoxItemType } from "src/Popup/Constants/types";

export const HeaderContainer = () => {

  const [items, setItems] = useState<ComboBoxItemType[]>(NETWORKS);
  const setNetworkId = useSetRecoilState(networkIdState);
  return {
    items,
    setNetworkId
  }
}

