import React from 'react';
import styled from 'styled-components';

const Hashtag = styled.span`
    top: 50.1rem;
    position: absolute;
    z-index: 2;
    font-family: 'AppleSDGothicNeo';
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
`;
const Title = styled.div`
    top: 47.7rem;
    position: absolute;
    z-index: 2;
    font-family: 'AppleSDGothicNeo';
    font-size: 2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
`;
function VideoDescription ({hashtagList, title}) {
    return (
        <>
            <div> 
                <Title>{title}</Title>
                {hashtagList.map((hashtag) => <Hashtag>{hashtag}</Hashtag>)}
            </div>
        </>
    )
}
export default VideoDescription;