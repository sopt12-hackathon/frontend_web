import React, { useRef } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

const ModalBackgorundWrap = styled.div`
    background: hsla(0, 0%, 0%, 0.4);
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    z-index: 10000;
`;

const ModalWrap = styled.div`
    width: 30rem; // 200px
    z-index: 100000;
    text-align: center;
    background: #ffffff;
    border: 3px solid orange;
    padding: 6rem 6rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    overflow-y: scroll;

    @media only screen and (max-width: 768px) {
        width: 90%;
        height: 90%;
        padding: 4rem;
    }
`;

const ModalTtile = styled.div`
    font-size: 1.5rem;
    font-weight: bolder;
    margin-bottom: 2.4rem;
`;

const ModalButton = styled.button`
    padding: 2rem;
    background: red;
`;

const ModalButtonWrap = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const ModalCloseButton = styled(IoMdClose)`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;

const ModalComponent = ({ onToggleModal }) => {
    const inputRef = useRef();
    const handleClick = (e) => {
        inputRef.current.click();
    };

    return (
        <>
            <ModalBackgorundWrap onClick={onToggleModal}></ModalBackgorundWrap>
            <ModalWrap>
                <ModalCloseButton onClick={onToggleModal} size={40} />
                <ModalTtile>
                    수고하셨어요
                    <br />
                    다음운동을 시작해볼까요?
                </ModalTtile>
                <ModalButtonWrap>
                    <ModalButton>그만하기</ModalButton>
                    <ModalButton>그만하기</ModalButton>
                </ModalButtonWrap>
            </ModalWrap>
        </>
    );
};

export default ModalComponent;
