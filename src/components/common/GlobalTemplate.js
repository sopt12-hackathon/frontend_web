import styled from "styled-components";

const GlobalTemplateWrap = styled.div`
    height: 100vh;
    padding: 0 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GlobalTemplate = ({ children }) => {
    return <GlobalTemplateWrap>{children}</GlobalTemplateWrap>;
};

export default GlobalTemplate;
