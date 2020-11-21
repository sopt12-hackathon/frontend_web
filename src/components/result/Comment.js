import React, { useState } from "react";
import styled from "styled-components";

const Frame = styled.div`
    height: 3.8rem;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    padding: 0;
    text-align: center;
    p {
        font-size: 1.4rem;
        margin-bottom: 0.2rem;
    }
`;

function Comment() {
    return (
        <>
            <Frame>
                <p style={{ fontSize: "2rem" }}>🗻</p>티클모아 태산이다
            </Frame>
        </>
    );
}
export default Comment;
