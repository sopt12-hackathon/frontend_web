import React from "react";
import styled from "styled-components";

const Youtube = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;
function Video({ videoId }) {
    const src = `https://www.youtube.com/embed/${videoId}`;
    return (
        <Youtube>
            <iframe
                width="100%"
                src={src}
                title="youtube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullscreen
            ></iframe>
        </Youtube>
    );
}
export default Video;
