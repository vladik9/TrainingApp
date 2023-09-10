import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const userContext = createContext({
  isUserSignedIn: false,
  setUserSignedIn: () => { },
  userToken: "",
  setUserToken: () => { },
  handleUserSingIn: () => { },
  handleUserSingOut: () => { },
  handleUserSignUp: () => { },
});
export default function LoginContext(props) {
  const [isUserSignedIn, setUserSignedIn] = useState(false);
  const [userToken, setUserToken] = useState("");
  const handleUserSingOut = () => { };

  //check using useEfect if we have token
  useEffect(() => {
    if (localStorage.getItem("training-token")) {
      setUserSignedIn(true);
      setUserToken(localStorage.getItem("training-token"));
    }
  }, []);

  const handleUserSingIn = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users/singin",
        data
      );

      setUserToken(response.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserSignUp = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users/singup",
        data
      );
      setUserToken(response.data.token);
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
