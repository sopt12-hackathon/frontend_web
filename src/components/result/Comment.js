import React, {useState} from 'react';
import styled from 'styled-components';

const Frame = styled.div`
    position: absolute;
    top: 1.5rem;
    left: 32.3rem;
    height: 3.8rem;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    p {
        font-size: 1.4rem;
        margin-bottom: 0.2rem;
        text-align: center;
    }
`;

function Comment () {
    return (
        <>
            <Frame><p>🗻</p>티클모아 태산이다.</Frame>
        </>
    )
}
export default Comment;