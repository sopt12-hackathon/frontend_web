import styled from "styled-components";

const MyProfileWrap = styled.div`
    padding: 2.6rem;
    grid-area: profile;
`;

const MyProfileComponent = () => {
    return (
        <MyProfileWrap>
            <div>헬 참치</div>
            <div>Lv. 1000</div>
        </MyProfileWrap>
    );
};

export default MyProfileComponent;
