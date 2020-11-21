import React from "react";
import SignupForm from "../components/SignupForm";
import SigninForm from "../components/SigninForm";
import {useDispatch, useSelector} from 'react-redux';
import {login} from "../modules/auth";

function SignForm({ page, history }) {
    
    const dispatch = useDispatch();
    
    const [loginInfo, setLoginInfo] = React.useState({
        name: "",
        email: "",
        password: "",
    })

    function LoginSubmit(event) {
        console.log(history)
        event.preventDefault();
        dispatch(login({email: loginInfo.email, password: loginInfo.password}));
        // history.push('/')
    }
    const {data, loading} = useSelector(({auth, loading}) => ({
        data: auth.auth,
        loading: loading["auth/LOGIN"]
    }));
    if (data) {
        const token = data.data.token;
        //local storage로 쿠키 설정 
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
                <SigninForm loginSubmit={LoginSubmit} loginInfo={loginInfo} onChangeInputs={onChangeInputs} />
            );
        case "signup":
            return(
                <SignupForm loginSubmit={LoginSubmit} loginInfo={loginInfo} onChangeInputs={onChangeInputs} />
            );
        default:
            return <div></div>;
    }
}

export default SignForm;