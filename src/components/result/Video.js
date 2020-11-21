import React from 'react';
import styled from 'styled-components';

const Youtube = styled.div`
    z-index: 5;
    position: absolute;
    left: 1.3rem;
    top: 5.7rem;
`;
function Video ({videoId}) {
    const src = `https://www.youtube.com/embed/${videoId}`
    return (
        <Youtube>
            <iframe width="730" height="411" src={src} title="youtube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Youtube>
    )
}
export default Video;