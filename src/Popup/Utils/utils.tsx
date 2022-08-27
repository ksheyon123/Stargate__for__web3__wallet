import { ClassBinderType } from "src/Popup/Constants/types";
import { saveAs } from "file-saver";

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

const downloadFile = async (address: string, data: string) => {
  let filename = "";
  if (address) {
    filename = "UTC--" + new Date().toISOString() + "--" + address;
  } else {
    filename = "stargate" + new Date().toISOString();
  }
  // Windows does not permit ":" in filenames, replace all with "-"
  console.log(navigator);
  console.log(navigator.appVersion);
  if (navigator.appVersion.indexOf("Win") !== -1)
    filename = filename.split(":").join("-");
  var blob = new Blob([data], { type: "text/plain;charset=utf-8" });
  saveAs(blob, filename);
  return true;
}

export {
  classBinder,
  downloadFile
}