import styled from "styled-components";

const MyGridComponent = styled.div`
    display: grid;
    width: 80%;
    grid-template-rows: repeat(3, 200px);
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
        "profile profile"
        "total  bedge"
        "chart bedge";
`;

export default MyGridComponent;
