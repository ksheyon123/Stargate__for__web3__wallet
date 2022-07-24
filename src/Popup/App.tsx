import React, { ReactNode } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getLocalStorage } from "src/Popup/Apis/localStorage";
import { PATH } from "src/Popup/Constants/index";
import { Layout } from "src/Popup/Components/index";
import { LoginPage } from "src/Popup/Pages/index";

const PrivateRoute: React.FC<{ isLoggedIn: boolean; children: ReactNode }> = (isLoggedIn, children) => {
  const navigate = useNavigate();
  if (!isLoggedIn) {
    navigate(`${PATH.LOGIN}`);
  }
  return (
    <>
      {children}
    </>
  )
}

const Routers = () => {
  const isLoggedIn = !!getLocalStorage("token");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <LoginPage />
          </Layout>
        }
      />
      {/* <PrivateRoute isLoggedIn={isLoggedIn}>

      </PrivateRoute> */}
    </Routes>
  )
}

export default Routers;
