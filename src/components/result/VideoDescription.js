import React from 'react';
import styled from 'styled-components';

const Hashtag = styled.span`
    
`;
const Title = styled.div`
    
`;
function VideoDescription ({hashtagList, title}) {
    return (
        <>
            <Title>{title}</Title>
            {hashtagList.map((hashtag) => <Hashtag>{hashtag}</Hashtag>)}
        </>
    )
}
export default VideoDescription;