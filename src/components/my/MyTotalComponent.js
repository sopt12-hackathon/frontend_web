import styled from "styled-components";
import MyProfileCardComponent from "./MyProfileCardComponent";

const MyTotalWrap = styled.div`
    grid-area: total;
`;

const MyTotalComponent = () => {
    return (
        <MyTotalWrap>
            <MyProfileCardComponent
                type={"total"}
                title={"총 운동시간"}
                content={"600시간"}
            />
        </MyTotalWrap>
    );
};

export default MyTotalComponent;
