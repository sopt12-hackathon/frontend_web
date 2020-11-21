import React from "react";
import InputList from "../containers/InputList";
import HeadLine from "../components/HeadLine";
import GlobalTemplate from "../components/common/GlobalTemplate";
import styled from "styled-components";

const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

function InputPage() {
    return(
        <GlobalTemplate>
            <InputWrap>
                <HeadLine />
                <InputList />
            </InputWrap>
        </GlobalTemplate>
    );
}

export default InputPage;