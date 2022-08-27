import { useState } from "react";
import { useRecoilCallback, useRecoilState, useSetRecoilState } from "recoil";
import { loginInputState, pageNavigationState } from "src/Popup/States/atom";
import { getLocalStorage } from "src/Popup/Apis/localStorage";
import { fromV3 } from "src/Popup/Signer/signer";

export const LoginPageContainer = () => {

  const [loginVale, setLoginValue] = useRecoilState(loginInputState);
  const setPageNav = useSetRecoilState(pageNavigationState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const checkFormat = () => {

  }

  const handleOnLogin = useRecoilCallback(({ snapshot }) => async () => {
    try {
      if (isLoading) return;
      setIsLoading(true);

      const inputValue = await snapshot.getPromise(loginInputState);
      const rsp = getLocalStorage("keystore");
      if (!!rsp) {
        const _keystore = JSON.parse(rsp);
        const priv = await fromV3(inputValue, _keystore);
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
    setPageNav,
    loginVale
  }
}