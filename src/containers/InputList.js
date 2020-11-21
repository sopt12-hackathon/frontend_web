import React from 'react';
import InputCard from '../components/InputCard';
import styled from 'styled-components';

const ListWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

function InputList({ history }) {
    const timeList = [2, 5, 10, 15];
    const [time, setTime] = React.useState(null);
    
    function inputClick(event) {
        const value = event.target.getAttribute("value");
        console.log(value);
        setTime(value);
        history.push(`/result/${value}`);
    }

    return(
        <ListWrap>
            <InputCard time={timeList[0]} inputClick={inputClick} />
            <InputCard time={timeList[1]} inputClick={inputClick} />
            <InputCard time={timeList[2]} inputClick={inputClick} />
            <InputCard time={timeList[3]} inputClick={inputClick} />
        </ListWrap>
    );
}

export default InputList;