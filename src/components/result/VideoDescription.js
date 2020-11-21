import React from "react";
import styled from "styled-components";
import fillUp from "../../images/fill_up.png";
import emptyUp from "../../images/empty_up.png";
import fillDown from "../../images/fill_down.png";
import emptyDown from "../../images/empty_down.png";

const Hashtag = styled.span`
    z-index: 2;
    font-family: "AppleSDGothicNeo";
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
`;
const TitleWrap = styled.div`
    z-index: 2;
    font-family: "AppleSDGothicNeo";
    font-size: 2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    display: flex;
    justify-content: space-between;
`;

const ButtonWrap = styled.div`
    display: flex;
`;

const StlyedButton = styled.img`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    & + & {
        margin-left: 1rem;
    }
`;

function VideoDescription({ hashtagList, title }) {
    return (
        <>
            <div style={{ marginTop: "1rem" }}>
                <TitleWrap>
                    <div>{title}</div>
                    <ButtonWrap>
                        <StlyedButton src={fillUp} alt={""} />
                        <StlyedButton src={emptyDown} alt={""} />
                    </ButtonWrap>
                </TitleWrap>
                {hashtagList.map((hashtag) => (
                    <Hashtag>{hashtag}</Hashtag>
                ))}
            </div>
        </>
    );
}
export default VideoDescription;
