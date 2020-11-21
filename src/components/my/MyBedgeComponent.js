import styled from "styled-components";

const MyBedgeWrap = styled.div`
    padding: 2.6rem;
    grid-area: bedge;
`;

const MyBedgeGrid = styled.div`
    display: grid;
    width: 100%;
    column-gap: 10px;
    row-gap: 10px;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
`;

const MyBedgeButton = styled.button`
    background: black;
    color: white;
`;

const MyBedgeComponent = () => {
    return (
        <MyBedgeWrap>
            <MyBedgeGrid>
                <div>🏄🏻</div>
                <div>🏄🏻</div>
                <div>🏄🏻</div>
                <div>🏄🏻</div>
                <div>🏄🏻</div>
                <div>🏄🏻</div>
                <div>🏄🏻</div>
                <div>🏄🏻</div>
                <div>🏄🏻</div>
                <div>🏄🏻</div>
            </MyBedgeGrid>
            <MyBedgeButton>운동하러가기 </MyBedgeButton>
        </MyBedgeWrap>
    );
};

export default MyBedgeComponent;
