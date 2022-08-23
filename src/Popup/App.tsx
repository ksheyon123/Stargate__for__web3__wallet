import React, { ReactNode } from "react";
import { getLocalStorage } from "src/Popup/Apis/localStorage";
import { PATH } from "src/Popup/Constants/index";
import { Layout } from "src/Popup/Components/index";
import { LoginPage, RegisterPage } from "src/Popup/Pages/index";

interface IProps {
  isLoggedIn: boolean;
}

const PrivateRoute: React.FC = () => {
  const isLoggedIn: boolean = !!getLocalStorage("token");
  const type = "LOGIN";

  switch (type) {
    case "LOGIN":
      return (
        <Layout>
          <LoginPage />
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
