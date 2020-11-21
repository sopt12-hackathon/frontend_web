import React from "react";
import InputCard from "../../components/main/InputCard";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import HeadLine from "../../components/main/HeadLine";

const ListWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const InputList = ({ history }) => {
    const timeList = [2, 5, 10, 15];

    const inputClick = (event) => {
        const value = event.target.getAttribute("value");
        history.push(`/result/${value}`);
    };

    return (
        <div style={{ width: "100%" }}>
            <HeadLine />
            <ListWrap>
                {timeList.map((value) => {
                    return (
                        <InputCard
                            key={value}
                            time={value}
                            inputClick={inputClick}
                        />
                    );
                })}
            </ListWrap>
        </div>
    );
};

export default withRouter(InputList);
