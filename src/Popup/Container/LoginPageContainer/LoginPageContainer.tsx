import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilCallback, useRecoilState } from "recoil";
import { loginInputState } from "src/Popup/States/atom";
import { getLocalStorage } from "src/Popup/Apis/localStorage";
import { fromV3 } from "src/Popup/Signer/signer";

export const LoginPageContainer = () => {

  const [loginVale, setLoginValue] = useRecoilState(loginInputState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const checkFormat = () => {

  }

  const handleOnLogin = useRecoilCallback(({ snapshot }) => async () => {
    try {
      if (isLoading) return;
      setIsLoading(true);

      const inputValue = await snapshot.getPromise(loginInputState);
      console.log(inputValue);
      const rsp = getLocalStorage("keystore");
      console.log(rsp);
      if (!!rsp) {
        const _keystore = JSON.parse(rsp);
        const priv = await fromV3(inputValue, _keystore);
        navigate("/main", {
          state: priv
        });
      }

    } catch (e) {
      throw e;
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  return {
    setLoginValue,
    handleOnLogin,
    loginVale
  }
}