import React from "react";
import GlobalTemplate from "../components/common/GlobalTemplate";
import MyProfileContainer from "../containers/my/MyProfileContainer";

const Mypage = () => {
    return (
        <GlobalTemplate>
            <MyProfileContainer />
        </GlobalTemplate>
    );
};

export default Mypage;
