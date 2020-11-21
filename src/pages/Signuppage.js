import React from "react";
import SignForm from "../containers/auth/SignForm";
import GlobalTemplate from "../components/common/GlobalTemplate";

function SignupPage() {
    return (
        <GlobalTemplate>
            <div className="signupForm">
                <h2>계정 만들기</h2>
                <p>헬린2분과 함께하는 막간 운동~</p>
                <SignForm page={"signup"} />
            </div>
        </GlobalTemplate>
    );
}

export default SignupPage;
