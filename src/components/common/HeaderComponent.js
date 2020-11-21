import styled from "styled-components";

const HeaderWarp = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.6rem;
    position: fixed;
    width: -webkit-fill-available;
    top: 0;
`;

const HeaderAuthWrap = styled.div`
    display: flex;
`;

const HeaderComponent = () => {
    return (
        <HeaderWarp>
            <div>헬린2분</div>
            <HeaderAuthWrap>
                <div>마이페이지</div>
                <div>로그인</div>
            </HeaderAuthWrap>
        </HeaderWarp>
    );
};

export default HeaderComponent;
