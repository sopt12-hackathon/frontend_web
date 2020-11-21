import React, { useState, useRef, useEffect } from "react";
import ModalComponent from "../../components/modal/ModalComponent";
import { useDispatch, useSelector } from "react-redux";
import { modalToggle } from "../../modules/modal";

const ModalContainer = () => {
    const dispatch = useDispatch();

    const { modalVisible } = useSelector(({ modal }) => ({
        modalVisible: modal.modalVisible,
    }));

    const onToggleModal = () => {
        dispatch(modalToggle());
        if (!modalVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    };
    return modalVisible ? (
        <ModalComponent onToggleModal={onToggleModal} />
    ) : (
        <></>
    );
};

export default ModalContainer;
