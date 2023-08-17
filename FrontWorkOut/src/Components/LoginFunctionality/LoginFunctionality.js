import React from "react";
import SignIn from "./SingIn/SignIn";
import SignUp from "./SignUp/SignUp";
import LoginContext from "./LoginContext/LoginContext";
import { Route, Routes } from "react-router-dom";
export default function LoginFunctionality() {
  return (
    <LoginContext>
      <SignIn />
    </LoginContext>
  );
}
