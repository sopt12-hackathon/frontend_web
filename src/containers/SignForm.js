import React from "react";
import SignupForm from "../components/SignupForm";
import SigninForm from "../components/SigninForm";

function SignForm({ page }) {
    const [loginInfo, setLoginInfo] = React.useState({
        name: "",
        email: "",
        password: "",
    })

    function loginSubmit(event) {
        console.log(loginInfo);
    }

    async function onChangeInputs(event) {
        const inputName = event.target.name;
        setLoginInfo({
            ...loginInfo,
            [inputName]: event.target.value,
        });
    }

    switch(page){
        case "signin":
            return(
                <SigninForm loginSubmit={loginSubmit} loginInfo={loginInfo} onChangeInputs={onChangeInputs} />
            );
        case "signup":
            return(
                <SignupForm loginSubmit={loginSubmit} loginInfo={loginInfo} onChangeInputs={onChangeInputs} />
            );
        default:
            return <div></div>;
    }
}

export default SignForm;