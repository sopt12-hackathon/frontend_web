import React from "react";
import styled from "styled-components";

const HeadLineWrap = styled.div`
    text-align: end;
`;

const HeadLineTitle = styled.div`
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 1rem;
`;

const HeadLineSubTitle = styled.div`
    font-size: 1.6rem;
    font-weight: normal;
`;

const HeadLineIconWrap = styled.div`
    font-size: 1.2rem;
    font-weight: 400;
    text-align: start;
    margin-top: 4rem;
    margin-bottom: 2rem;
    padding-left: 2rem;
    display: flex;
    align-items: center;
`;

const HeadLine = () => {
    return (
        <>
            <HeadLineWrap>
                <HeadLineTitle>티끌 모아 핫바디</HeadLineTitle>
                <HeadLineSubTitle>
                    침대 중독에서 운동 중독으로! 막간 홈트레이닝 추천 서비스
                </HeadLineSubTitle>
            </HeadLineWrap>
            <HeadLineIconWrap>
                <span style={{ fontSize: "2rem", marginRight: "1rem" }}>
                    ⌛️
                </span>
                시간을 선택해주세요
            </HeadLineIconWrap>
        </>
    );
};

export default HeadLine;
