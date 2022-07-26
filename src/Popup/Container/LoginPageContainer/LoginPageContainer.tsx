import { useState } from "react";
import { useRecoilCallback, useRecoilState } from "recoil";
import { loginInputState } from "src/Popup/States/atom";

export const LoginPageContainer = () => {

  const [loginVale, setLoginValue] = useRecoilState(loginInputState);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const checkFormat = () => {

  }

  const handleOnLogin = useRecoilCallback(({ snapshot }) => async () => {
    try {
      if (isLoading) return;
      setIsLoading(true);

      const inputValue = await snapshot.getPromise(loginInputState);

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