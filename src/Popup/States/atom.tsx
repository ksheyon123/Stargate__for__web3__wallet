import { atom } from "recoil";
import { PageNavigation } from 'src/Popup/Constants/types';
const pageNavigationState = atom<PageNavigation>({
  key: "pageNavigationState",
  default: "LOGIN",
})

const loginInputState = atom<string | number>({
  key: "loginInputState",
  default: "",
});

const networkIdState = atom<number | null>({
  key: "networkIdState",
  default: null
})

export {
  pageNavigationState,
  loginInputState,
  networkIdState
}