import React from "react";
import SignForm from "../containers/auth/SignForm";
import GlobalTemplate from "../components/common/GlobalTemplate";

function SigninPage() {
    return (
        <GlobalTemplate>
            <div className="SigninForm">
                <h2>로그인 하기</h2>
                <p>헬린2분과 함께하는 막간 운동~</p>
                <SignForm page={"signin"} />
            </div>
        </GlobalTemplate>
    );
}

export default SigninPage;
