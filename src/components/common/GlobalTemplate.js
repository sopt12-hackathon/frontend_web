import styled from "styled-components";
import background from "../../images/background.png";
const GlobalTemplateWrap = styled.div`
    height: 100vh;
    padding: 0 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${background});
    background-size: cover;
`;

const GlobalTemplate = ({ children }) => {
    return <GlobalTemplateWrap>{children}</GlobalTemplateWrap>;
};

export default GlobalTemplate;
