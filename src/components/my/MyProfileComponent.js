import styled from "styled-components";
import MyProfileCardComponent from "./MyProfileCardComponent";

const MyProfileWrap = styled.div`
    grid-area: profile;
`;

const MyProfileComponent = () => {
    return (
        <MyProfileWrap>
            <MyProfileCardComponent
                title={"Lv 1. 헬린이탈출중"}
                content={"🐣 김참새"}
                type={"profile"}
            />
        </MyProfileWrap>
    );
};

export default MyProfileComponent;
