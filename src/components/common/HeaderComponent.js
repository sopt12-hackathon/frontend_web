import styled from "styled-components";
import logo from "../../images/logo.png";
const HeaderWarp = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 20rem;
    position: fixed;
    width: -webkit-fill-available;
    top: 0;
`;

const HeaderAuthWrap = styled.div`
    display: flex;
`;

const HeaderAuthButton = styled.div`
    margin-left: 1.2rem;
    font-size: 1.2rem;
    cursor: pointer;
`;

const HeaderComponent = () => {
    return (
        <HeaderWarp>
            <img src={logo} width={"170px"} alt={""} />
            <HeaderAuthWrap>
                <HeaderAuthButton>마이페이지</HeaderAuthButton>
                <HeaderAuthButton>로그인</HeaderAuthButton>
            </HeaderAuthWrap>
        </HeaderWarp>
    );
};

export default HeaderComponent;
