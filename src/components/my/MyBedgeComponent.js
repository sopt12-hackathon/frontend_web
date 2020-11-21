import styled from "styled-components";
import MyProfileCardComponent from "./MyProfileCardComponent";
import one from "../../images/one.png";
import two from "../../images/two.png";
import five from "../../images/five.png";
import ten from "../../images/ten.png";

const MyBedgeWrap = styled.div`
    grid-area: bedge;
    margin-left: 3rem;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 5rem;
`;

const MyBedgeGrid = styled.div`
    display: grid;
    margin: 1rem;
    width: 100%;
    column-gap: 2rem;
    row-gap: 2rem;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
`;

const MyBedgeButton = styled.button`
    background: black;
    color: black;
    position: relative;
    bottom: 0;
    padding: 17px 27px 15px 28px;
    border: solid 3px #43d2ff;
    background-color: #ffffff;
    width: fit-content;
    font-size: 2rem;
    font-weight: bolder;
    box-shadow: 10px 10px #ff934f;
    transition: 0.5s;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    &:hover {
        box-shadow: 0px 0px #ff934f;
        transform: translate(4px, 4px);
    }
`;

const MyBedgeImage = styled.img`
    width: 11rem;
    height: 11rem;
`;

const MyBedgeComponent = () => {
    return (
        <MyBedgeWrap>
            <MyProfileCardComponent
                title={"뱃지"}
                content={
                    <>
                        <MyBedgeGrid>
                            <MyBedgeImage src={one} alt={""} />
                            <MyBedgeImage src={two} alt={""} />
                            <MyBedgeImage src={five} alt={""} />
                            <MyBedgeImage src={ten} alt={""} />
                        </MyBedgeGrid>
                    </>
                }
            />
            <MyBedgeButton>운동하러go!!</MyBedgeButton>
        </MyBedgeWrap>
    );
};

export default MyBedgeComponent;
