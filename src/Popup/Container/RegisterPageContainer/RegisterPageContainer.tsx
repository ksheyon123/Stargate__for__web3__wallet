import { useState } from "react";

export const RegisterPageContainer = () => {

  const [password, setPassword] = useState<string>("");
  const [re_password, setRePassword] = useState<string>("");
  const [process, setProcess] = useState<number>(0);

  const [isSaveFile, setIsSaveFile] = useState<boolean>(false);

  const signKeystore = () => {

  }

  const saveSingedKeystore = () => {

  }

  return {
    setPassword,
    setRePassword,
    setIsSaveFile,
    setProcess,
    password,
    re_password,
    isSaveFile,
    process
  }
}