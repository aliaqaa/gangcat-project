import React from "react";
import AuthHeader from "../common/AuthHeader/AuthHeader";
import AuthFooter from "../common/AuthFooter/AuthFooter";
import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <>
      <AuthHeader />
      <Outlet />
      <AuthFooter />
    </>
  );
}

export default AuthLayout;
