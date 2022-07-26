import { ClassBinderType } from "src/Popup/Constants/types";

const classBinder = ({
  prefix,
  suffix,
  cond }: ClassBinderType) => {
  if (cond) {
    return prefix + " " + suffix
  }
  return prefix;
}

export {
  classBinder
}