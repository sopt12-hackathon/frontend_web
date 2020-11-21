import React from "react";
import GlobalTemplate from "../components/common/GlobalTemplate";
import MyProfileContainer from "../containers/my/MyProfileContainer";
import ModalContainer from "../containers/modal/ModalContainer";
import FooterComponent from "../components/common/FooterComponent";

const Mypage = () => {
    return (
        <>
            <GlobalTemplate>
                <MyProfileContainer />
                <ModalContainer />
            </GlobalTemplate>
            <FooterComponent />
        </>
    );
};

export default Mypage;
