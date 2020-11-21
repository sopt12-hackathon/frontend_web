import styled from "styled-components";

const MyTotalWrap = styled.div`
    padding: 2.6rem;
    grid-area: total;
`;

const MyTotalComponent = () => {
    return (
        <MyTotalWrap>
            <div>헬 참치</div>
            <div>Lv. 1000</div>
        </MyTotalWrap>
    );
};

export default MyTotalComponent;
