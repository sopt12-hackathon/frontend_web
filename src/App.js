import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import MainPage from "./pages/Mainpage";
import GlobalStyles from "./lib/GlobalStyles";

const App = () => {
  return (
    <>
      <Route component={MainPage} path={["/"]} exact />
      <GlobalStyles />
    </>
  );
};

export default App;
