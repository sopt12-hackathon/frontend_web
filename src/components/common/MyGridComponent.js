import styled from "styled-components";

const MyGridComponent = styled.div`
    display: grid;
    width: 80%;
    grid-template-rows: repeat(3);
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: 3rem;
    grid-template-areas:
        "profile bedge"
        "total  bedge"
        "chart bedge";
`;

export default MyGridComponent;
