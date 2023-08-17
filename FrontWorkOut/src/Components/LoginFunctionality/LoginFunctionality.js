import React from "react";
import SignIn from "./SingIn/SignIn";
import SignUp from "./SignUp/SignUp";
import LoginContext from "./LoginContext/LoginContext";
export default function LoginFunctionality() {
  return (
    <LoginContext>
      <SignUp />
    </LoginContext>
  );
}
