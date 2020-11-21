import React from "react";
import SignForm from "../containers/SignForm";
import GlobalTemplate from "../components/common/GlobalTemplate";

function SigninPage() {
    return(
        <GlobalTemplate>
            <div className="SigninForm">
                <SignForm page={"signin"}/>
            </div>
        </GlobalTemplate>
    );
}

export default SigninPage;