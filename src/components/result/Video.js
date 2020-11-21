import React from 'react';

function Video ({videoId}) {
    const src = `https://www.youtube.com/embed/${videoId}`
    return (
        <>
        <iframe width="560" height="315" src={src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </>
    )
}
export default Video;