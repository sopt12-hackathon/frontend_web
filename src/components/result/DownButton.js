import React, {useState} from 'react';
import styled from 'styled-components';

const imagePath = {
    minus: "",
    plus: ""
}
function DownButton () {
    const [toggle, setToggle] = useState(true)
    const toggleImage = () => {
        setToggle((prev) => !prev);
    }
    const getImage = () => toggle ? 'plus' : 'minus';
    const imageName = getImage();
    return (
        <>
        <img src={imagePath[imageName]} alt="up" width="500" height="300" onClick={toggleImage}/>
        </>
    )
}
export default DownButton;