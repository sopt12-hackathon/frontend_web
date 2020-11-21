import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";

import MainPage from "./pages/Mainpage";
import InputPage from "./pages/Inputpage";
import SignupPage from "./pages/Signuppage";
import SigninPage from "./pages/Signinpage";
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
            <Route component={InputPage} path={"/input"} />
            <Route component={SignupPage} path={"/signup"} />
            <Route component={SigninPage} path={"/signin"} />
            <FooterComponent />
            <GlobalStyles />
        </>
    );
};

export default App;
