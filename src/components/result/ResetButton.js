import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {recomendResult} from '../../modules/result';

const Reset = styled.span`
    
`;

const ResetButton = ({time}) => {
    const dispatch = useDispatch();
    const resetResultPage = () => {
        console.log(time)
        dispatch(recomendResult(time));
    }
    return (
        <Reset>
            <img src="" alt="up" width="500" height="300" onClick={resetResultPage}/>
        </Reset>
    )
}
export default ResetButton;