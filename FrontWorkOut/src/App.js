import React from "react";
import SignIn from "./Components/SingIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import LoginContext from "./Components/LoginContext/LoginContext";
function App() {
  return (
    <LoginContext>
      <SignIn />
    </LoginContext>
  );
}

export default App;
