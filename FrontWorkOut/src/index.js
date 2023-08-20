import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Components/LoginFunctionality/SingIn/SignIn";
import SignUp from "./Components/LoginFunctionality/SignUp/SignUp";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import ResetPassword from "./Components/LoginFunctionality/ResetPassword/ResetPassword";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="singup" element={<SignUp />} />
      <Route path="singin" element={<SignIn />} />
      <Route path="resetpassword" element={<ResetPassword />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
);
