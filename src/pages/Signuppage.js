import React from "react";
import SignForm from "../containers/SignForm";
import GlobalTemplate from "../components/common/GlobalTemplate";

function SignupPage() {
    return(
        <GlobalTemplate>
            <div className="signupForm">
                <SignForm page={"signup"}/>
            </div>
        </GlobalTemplate>
    );
}

export default SignupPage;