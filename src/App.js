import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import MainPage from "./pages/Mainpage";
import InputPage from "./pages/Inputpage";
import SignupPage from "./pages/Signuppage";
import SigninPage from "./pages/Signinpage";
import GlobalStyles from "./lib/GlobalStyles";

const App = () => {
  return (
    <>
      <Route component={MainPage} path={["/"]} exact />
      <Route component={InputPage} path={"/input"} />
      <Route component={SignupPage} path={"/signup"} />
      <Route component={SigninPage} path={"/signin"} />
      <GlobalStyles />
    </>
  );
};

export default App;
