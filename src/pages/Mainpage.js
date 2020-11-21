import React from "react";
import GlobalTemplate from "../components/common/GlobalTemplate";
import ListContainer from "../containers/main/ListContainer";
import FooterComponent from "../components/common/FooterComponent";

function MainPage() {
    return (
        <>
            <GlobalTemplate>
                <ListContainer />
            </GlobalTemplate>
            <FooterComponent />
        </>
    );
}

export default MainPage;
