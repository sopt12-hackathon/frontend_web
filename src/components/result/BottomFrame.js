import React, {useState} from 'react';
import styled from 'styled-components';
import Video from './Video';
import VideoDescription from './VideoDescription';
import Comment from './Comment';

const Frame = styled.div`
    position: absolute;
    left: 25.5rem;
    top: 13.5rem;
    width: 76.2rem;
    height: 55.6rem;
    padding: 57px 16px 88px 16px;
    border: solid 3px #43d2ff;
    box-sizing: border-box;
    margin-bottom: 2.9rem;
    /* z-index: 1; */
`;
function BottomFrame ({data}) {
    return (
        <>
            <Frame>
                <Comment />
                <Video videoId={data.id}/>
                <VideoDescription hashtagList={data.hashtagList} title={data.title}/>
            </Frame>
        </>
    )
}
export default BottomFrame;