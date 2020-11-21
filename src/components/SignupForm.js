import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const FormWrap = styled.div`
    width: 37.3rem;
    height: 48.2rem;
    background-color: #ffffff;
    border: solid 3px #43d2ff;
    position: absolute;
    box-sizing: border-box;
    top: 11.9rem;
    right: 26.7rem;
    margin-bottom: 12rem;
    font-family: AppleSDGothicNeo-Regular;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;

    .form{
        display: flex;
        flex-direction: column;
    }
    p {
        margin-top: 2.8rem;
        margin-left: 2.1rem;
        font-size: 1.2rem;
        text-align: left;
        height: 1.4rem;
    }
    input {
        width: 32.5rem;
        height: 2.7rem;
        border-style: none;
        border-bottom: solid 3px #43d2ff;
        margin-left: 2.1rem;
    }
    input[type=submit] {
        width: 11.2rem;
        border: solid 3px #43d2ff;
        background-color: #ffffff;
        margin-top: 10rem;
        margin-left: 23.4rem;
        font-size: 1.2rem;
        height: 4rem;
        text-align: center;
    }
    input:focus {
        outline: none;
    }
    h2 {
        font-size: 2.4rem;
        text-align: left;
        margin-left: 2.1rem;
        margin-top: 2.5rem;
        height: 2.9rem;
    }
    h5 {
        font-size: 1.1rem;
        text-align: left;
        margin-left: 2.1rem;
        margin-top: 0.4rem;
        margin-bottom: 2.2rem;
    }
    span {
        text-decoration: underline;
    }
    span:hover {
        cursor: pointer;
    }
    .shadow {
        width: 37.3rem;
        height: 48.2rem;
        position: absolute;
        border-style: none;
        background-color: #ff934f;
        top: 0.5rem;
        left: 0.5rem;
        z-index: -1;
    }
`;

function SignupForm({ loginSubmit, loginInfo, onChangeInputs, history }) {
    return (
        <FormWrap>
            <div className="shadow"></div>
            <h2>계정 만들기</h2>
            <h5>이미 계정이 있나요? &nbsp; <span onClick={() => history.push("./signin")}>로그인</span></h5>
            <form className="form" onSubmit={loginSubmit} method="POST" action="/">
                <p>이름</p>
                <input type="text" name="name" value={loginInfo.name} onChange={onChangeInputs}></input>
                <p>이메일 주소</p>
                <input type="email" name="email" value={loginInfo.email} onChange={onChangeInputs}></input>
                <p>비밀번호</p>
                <input type="password" name="password" value={loginInfo.password} onChange={onChangeInputs}></input>
                <input type="submit" value="완료!"></input>
            </form>
        </FormWrap>
    );
}

export default withRouter(SignupForm);