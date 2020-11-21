import styled from "styled-components";

const GlobalTemplateWrap = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GlobalTemplate = ({ children }) => {
    return <GlobalTemplateWrap>{children}</GlobalTemplateWrap>;
};

export default GlobalTemplate;
