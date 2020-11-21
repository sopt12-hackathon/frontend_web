import React from "react";
import styled from "styled-components";

const FormWrap = styled.div`
    .form{
        display: flex;
        flex-direction: column;
        width: 350px;
        height: 300px;
    }
    p {
        margin: 5px;
    }
    input {
        width: 300px;
        margin: 5px;
    }
    input[type=submit] {
        width: 150px;
        border-style: none;
        background-color: lightgray;
        padding: 10px 20px;
    }
`;

function SignForm({ page }) {
    console.log(page);
    const [loginInfo, setLoginInfo] = React.useState({
        name: "",
        email: "",
        password: "",
    })

    function loginSubmit(event) {
        console.log(event);
    }

    async function onChangeInputs(event) {
        console.log(event.target.name);
    }

    switch(page){
        case "signin":
            return(
                <FormWrap>
                    <form className="form" onSubmit={loginSubmit} method="POST">
                        <p>이메일 주소</p>
                        <input type="email" name="email" value={loginInfo.email} onChange={onChangeInputs}></input>
                        <p>비밀번호</p>
                        <input type="password" name="pw" value={loginInfo.password} onChange={onChangeInputs}></input>
                        <input type="submit" value="로그인 하기"></input>
                    </form>
                </FormWrap>
            );
        case "signup":
            return(
                <FormWrap>
                    <form className="form" onSubmit={loginSubmit} method="POST">
                        <p>이름</p>
                        <input type="text" name="name" value={loginInfo.name} onChange={onChangeInputs}></input>
                        <p>이메일 주소</p>
                        <input type="email" name="email" value={loginInfo.email} onChange={onChangeInputs}></input>
                        <p>비밀번호</p>
                        <input type="password" name="pw" value={loginInfo.password} onChange={onChangeInputs}></input>
                        <input type="submit" value="계정 만들기"></input>
                    </form>
                </FormWrap>
            );
        default:
            return <div></div>;
    }
}

export default SignForm;