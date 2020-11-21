import React from "react";
import styled from "styled-components";

const CardWrap = styled.div`
    background-color: white;
    border: 3px solid #43d2ff;
    color: black;
    width: 20rem;
    height: 20rem;
    padding: 1.6rem;
    box-shadow: 12px 12px #ff934f;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        transform: translate(8px, 8px);
        box-shadow: 0px 0px #ff934f;
    }
`;

const CardTime = styled.div`
    font-size: 4rem;
    font-weight: 700;
`;

const CardSubTitleWrap = styled.div`
    font-size: 1.6rem;
    text-align: end;
`;

function InputCard({ time, inputClick }) {
    return (
        <CardWrap onClick={inputClick} value={time}>
            <CardTime>{time}분</CardTime>
            <CardSubTitleWrap>
                <div style={{ fontSize: "4rem", marginBottom: "0.5rem" }}>
                    🏔
                </div>
                <div>티끌모아 한라산</div>
            </CardSubTitleWrap>
        </CardWrap>
    );
}

export default InputCard;
