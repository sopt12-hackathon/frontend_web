import React, {useState} from 'react';
import styled from 'styled-components';

const Frame = styled.div`
    top: 9.3rem;
    left: 25.5rem;
    height: 4.2rem;
    width: 76.2rem;
    padding: 1.2rem 1.6rem;
    border: solid 3px #43d2ff;
    background-color: #ffffff;
    position: absolute;
    z-index: 3;
`;
function TopFrame () {
    return (
        <>
            <Frame/>
        </>
    )
}
export default TopFrame;