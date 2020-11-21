import React, {useState} from 'react';
import styled from 'styled-components';

const Frame = styled.div`
    top: 9.3rem;
    left: 25.5rem;
    width: 76.2rem;
    height: 4.5rem;
    padding: 1.2rem 1.6rem;
    border: solid 0.3rem #43d2ff;
    background-color: #ffffff;
    position: absolute;
    box-sizing: border-box;
`;

function TopFrame () {
    return (
        <>
            <Frame/>
        </>
    )
}
export default TopFrame;