import React from "react";
import styled from "styled-components";

const HeadLineWrap = styled.div`
    h2 {
        font-size: 7rem;
    }
    p {
        font-size: 2rem;
    }
`;

function HeadLine() {
    return(
        <HeadLineWrap>
            <h2>Headline</h2>
            <p>서비스에 대해 설명해보아요.</p>
        </HeadLineWrap>
    );
}

export default HeadLine;