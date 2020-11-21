import styled, { css } from "styled-components";

const MyCardWrap = styled.div`
    border: solid 3px #43d2ff;
    background-color: #ffffff;
    box-shadow: 9px 9px #ff934f;
    ${(props) =>
        props.type === "total"
            ? css`
                  width: 80%;
              `
            : css``}
    ${(props) =>
        props.type === "chart"
            ? css`
                  width: 85%;
              `
            : css``}
`;

const MyCardTitle = styled.div`
    border-bottom: solid 3px #43d2ff;
    padding: 1.2rem 1.6rem;
    font-size: 1.6rem;
    font-weight: 700;
`;

const MyCardContent = styled.div`
    padding: 2rem 1.6rem;
    ${(props) =>
        props.type === "profile"
            ? css`
                  font-size: 3.8rem;
                  font-weight: 500;
              `
            : css`
                  font-size: 4.2rem;
                  font-weight: 700;
                  text-align: end;
              `}
`;

const MyProfileCardComponent = ({ title, content, type }) => {
    return (
        <MyCardWrap type={type}>
            <MyCardTitle>{title}</MyCardTitle>
            <MyCardContent type={type}>{content}</MyCardContent>
        </MyCardWrap>
    );
};

export default MyProfileCardComponent;
