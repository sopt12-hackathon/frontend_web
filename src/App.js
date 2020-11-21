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
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/qUpiMskov20" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      <GlobalStyles />
    </>
  );
};

export default App;
