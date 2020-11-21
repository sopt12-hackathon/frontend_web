import styled from "styled-components";

const FooterWarp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2.6rem 20rem;
    position: fixed;
    width: -webkit-fill-available;
    bottom: 0;
`;

const FooterComponent = () => {
    return (
        <FooterWarp>
            <div>카카오 플친 @헬린2분</div>
            <div>인스타그램 @healthrinydle</div>
        </FooterWarp>
    );
};

export default FooterComponent;
