import { useCallback, useState } from "react";
import { Errors } from "src/Popup/Apis/Error";
import { ERRORS, PATH } from "src/Popup/Constants/index";
import { ERROR_CODES } from "src/Popup/Constants/enums";

export const RegisterPageContainer = () => {


  const [toggle, setToggle] = useState<number>(0);

  const [walletName, setWalletName] = useState<string | number>("");
  const [password, setPassword] = useState<string | number>("");
  const [re_password, setRePassword] = useState<string | number>("");
  const [process, setProcess] = useState<number>(0);

  const [isSaveFile, setIsSaveFile] = useState<boolean>(false);

  const signKeystore = () => {

  }

  const saveSingedKeystore = () => {

  }

  const InputFilter = useCallback(async () => {
    if (!walletName || !password || !re_password) {
      throw new Errors({ errCode: ERROR_CODES.L002, errMsg: ERRORS[ERROR_CODES.L002] });
    }
    return;
  }, [walletName, password, re_password]);

  const handleSubmit = useCallback(async () => {
    try {
      if (process !== 2) return;
      await InputFilter();

    } catch (e) {
      console.log(e)
      throw e;
    }
  }, [process]);

  return {
    setWalletName,
    setToggle,
    setPassword,
    setRePassword,
    setIsSaveFile,
    setProcess,
    handleSubmit,
    toggle,
    walletName,
    password,
    re_password,
    isSaveFile,
    process
  }
}