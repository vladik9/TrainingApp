import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Components/Login/SingIn/SignIn";
import SignUp from "./Components/Login/SignUp/SignUp";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import ResetPassword from "./Components/Login/ResetPassword/ResetPassword";
import Dashboard from "./Components/Dashboard/Dashboard";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />

      {/* <Route path="/" element={<SignIn />} /> */}
      <Route path="singup" element={<SignUp />} />
      <Route path="singin" element={<SignIn />} />
      <Route path="resetpassword" element={<ResetPassword />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
);
