import { StorageType } from "src/Popup/Constants/types";

const setLocalStorage = ({ key, data }: StorageType) => {
  try {
    window.localStorage.setItem(key, data);
  } catch (e) {
    throw e;
  }

}

const getLocalStorage = (key: string) => {
  try {
    let returnStr: string | null;
    returnStr = window.localStorage.getItem(key);
    return returnStr;
  } catch (e) {
    throw e;
  }
}


export {
  setLocalStorage,
  getLocalStorage
}