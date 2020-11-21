import React from 'react';
import InputCard from '../components/InputCard';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const ListWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

function InputList({ history }) {
    const timeList = [2, 5, 10, 15];
    
    function inputClick(event) {
        const value = event.target.getAttribute("value");
        console.log(value);
        history.push(`/result/${value}`);
    }

    return(
        <ListWrap>
            {timeList.map(value => {
                return <InputCard key={value} time={value} inputClick={inputClick} />
            })}
        </ListWrap>
    );
}

export default withRouter(InputList);