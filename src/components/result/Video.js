import React from 'react';
import styled from 'styled-components';

const Youtube = styled.div`
    
`;
function Video ({videoId}) {
    const src = `https://www.youtube.com/embed/${videoId}`
    return (
        <Youtube>
            <iframe width="560" height="315" src={src} title="youtube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Youtube>
    )
}
export default Video;