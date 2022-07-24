import { atom } from "recoil";

const loginInputState = atom<string | number>({
  key: "loginInputState",
  default: "",
});

export {
  loginInputState
}