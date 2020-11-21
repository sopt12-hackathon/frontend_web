import React, {useState} from 'react';
import styled from 'styled-components';
import Video from './Video';
import VideoDescription from './VideoDescription';

const Frame = styled.div`
    position: absolute;
    left: 25.5rem;
    top: 13.5rem;
    width: 76.2rem;
    height: 55.6rem;
    padding: 57px 16px 88px 16px;
    border: solid 3px #43d2ff;
    /* z-index: 1; */
`;
function BottomFrame ({data}) {
    return (
        <>
            <Frame>
                <Video videoId={data.id}/>
                <VideoDescription hashtagList={data.hashtagList} title={data.title}/>
            </Frame>
        </>
    )
}
export default BottomFrame;