import React from "react";
import { useRecoilValue } from "recoil";
import { pageNavigationState } from 'src/Popup/States/atom';
import { getLocalStorage } from "src/Popup/Apis/localStorage";
import { Layout } from "src/Popup/Components/index";
import {
  LoginPage,
  RegisterPage,
  WalletPage_1
} from "src/Popup/Pages/index";

interface IProps {
  isLoggedIn: boolean;
}

const PrivateRoute: React.FC = () => {
  const isLoggedIn: boolean = !!getLocalStorage("token");
  const pageNav = useRecoilValue(pageNavigationState);

  switch (pageNav) {
    case "LOGIN":
      return (
        <Layout>
          <LoginPage />
        </Layout>
      )
    case "REGISTER":
      return (
        <Layout>
          <RegisterPage />
        </Layout>
      )
    case "WALLET_1":
      return (
        <Layout>
          <WalletPage_1 />
        </Layout>
      )
    default:
      return (
        <Layout>
          <>
          </>
        </Layout>
      )
  }
}

const Router = () => {

  return (
    <PrivateRoute />
  )
}

export default Router;
