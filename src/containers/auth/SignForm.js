import React from "react";
import SigninForm from "../../components/auth/SigninForm";
import SignupForm from "../../components/auth/SignupForm";

function SignForm({ page }) {
    const [loginInfo, setLoginInfo] = React.useState({
        name: "",
        email: "",
        password: "",
    });

    function loginSubmit(event) {}

    async function onChangeInputs(event) {
        const inputName = event.target.name;
        setLoginInfo({
            ...loginInfo,
            [inputName]: event.target.value,
        });
    }

    switch (page) {
        case "signin":
            return (
                <SigninForm
                    loginSubmit={loginSubmit}
                    loginInfo={loginInfo}
                    onChangeInputs={onChangeInputs}
                />
            );
        case "signup":
            return (
                <SignupForm
                    loginSubmit={loginSubmit}
                    loginInfo={loginInfo}
                    onChangeInputs={onChangeInputs}
                />
            );
        default:
            return <div></div>;
    }
}

export default SignForm;
