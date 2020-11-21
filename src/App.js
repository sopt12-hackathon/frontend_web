import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GlobalStyles from "./lib/GlobalStyles";
import MyPage from "./pages/MyPage";
import HeaderContainer from "./containers/common/HeaderContainer";
import FooterComponent from "./components/common/FooterComponent";

const App = () => {
    return (
        <>
            <HeaderContainer />
            <Route component={MainPage} path={["/"]} exact />
            <Route component={MyPage} path={"/mypage"} exact />
            <FooterComponent />
            <GlobalStyles />
        </>
    );
};

export default App;
