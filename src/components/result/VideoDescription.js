import React from 'react';
import styled from 'styled-components';

const Hashtag = styled.span`
    
`;
const Title = styled.div`
    
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