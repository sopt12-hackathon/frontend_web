import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import MainPage from "./pages/Mainpage";
import GlobalStyles from "./lib/GlobalStyles";
import MyPage from "./pages/MyPage";
import ResultPage from "./pages/ResultPage";
import HeaderContainer from "./containers/common/HeaderContainer";
import FooterComponent from "./components/common/FooterComponent";

const App = () => {
    return (
        <>
            <HeaderContainer />
            <Route component={MainPage} path={["/"]} exact />
            <Route component={MyPage} path={"/mypage"} exact />
            <Route component={ResultPage} path={"/result/:time"} exact />
            <FooterComponent />
            <GlobalStyles />
        </>
    );
};

export default App;
