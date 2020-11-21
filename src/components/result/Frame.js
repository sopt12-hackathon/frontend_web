import React, {useState} from 'react';
import styled from 'styled-components';

const TopFrame = styled.div`
    top: 9.3rem;
    width: 76.2rem;
    height: 4.5rem;
    margin: 0 0.8rem 56.1rem 0;
    padding: 1.2rem 1.6rem;
    border: solid 3px #43d2ff;
    background-color: #ffffff;
    position: absolute;
`;
const BottomFrame = styled.div`
    top: 13.5rem;
    bottom: 3rem;
    width: 76.2rem;
    height: 55.6rem;
    margin: 0 0.8rem 56.1rem 0;
    padding: 1.2rem 1.6rem;
    border: solid 3px #43d2ff;
    background-color: #ffffff;
    position: absolute;
    
`;
function Frame () {
    return (
        <>
            <TopFrame></TopFrame>
            <BottomFrame></BottomFrame>
        </>
    )
}
export default Frame;