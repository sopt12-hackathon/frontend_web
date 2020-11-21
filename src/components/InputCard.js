import React from "react";
import styled from 'styled-components';

const CardWrap = styled.div`
    font-size: 5rem;
    background-color: gray;
    color: black;
    width: 208px;
    height: 208px;
    margin: 20px;
`;

function InputCard({ time, inputClick }) {
    return(
        <CardWrap onClick={inputClick} value={time}>
            <div className={`input-card-${time}`}>
                {time}분
            </div>
        </CardWrap>

    );
}

export default InputCard;