import React from "react";
import GlobalTemplate from "../components/common/GlobalTemplate";
import MyProfileContainer from "../containers/my/MyProfileContainer";
import ModalContainer from "../containers/modal/ModalContainer";

const Mypage = () => {
    return (
        <GlobalTemplate>
            <MyProfileContainer />
            <ModalContainer />
        </GlobalTemplate>
    );
};

export default Mypage;
