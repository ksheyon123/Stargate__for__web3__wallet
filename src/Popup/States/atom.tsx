import { atom } from "recoil";

const loginInputState = atom<string | number>({
  key: "loginInputState",
  default: "",
});

const networkIdState = atom<number | null>({
  key: "networkIdState",
  default: null
})

export {
  loginInputState,
  networkIdState
}