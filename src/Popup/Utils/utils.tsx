import { ClassBinderType } from "src/Popup/Constants/types";

const classBinder = (props: ClassBinderType) => {
  const {
    prefix,
    suffix,
    cond
  } = props
  if (cond) {
    return prefix + " " + suffix
  }
  return prefix;
}

export {
  classBinder
}