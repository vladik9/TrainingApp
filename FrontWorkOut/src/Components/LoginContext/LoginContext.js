import React, { createContext, useState } from "react";
import axios from "axios";
export const userContext = createContext({
  isUserSignedIn: false,
  userToken: "",
  setUserToken: () => {},
  setUserLoggedIn: () => {},
  handleUserSingIn: () => {},
  handleUserSingOut: () => {},
  handleUserSignUp: () => {},
});
export default function LoginContext(props) {
  const [isUserSignedIn, setUserSignedIn] = useState(false);
  const [userToken, setUserToken] = useState("");
  const handleUserSingOut = () => {};

  const handleUserSingIn = async (data) => {
    console.log("in sing in");
    try {
      const response = await axios.post(
        "http://localhost:8080/users/login",
        data
      );
      console.log(response);
      setUserToken(response.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserSignUp = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users/singin",
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <userContext.Provider
      value={{
        isUserSignedIn,
        userToken,
        setUserToken,
        setUserSignedIn,
        handleUserSingIn,
        handleUserSingOut,
        handleUserSignUp,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}
