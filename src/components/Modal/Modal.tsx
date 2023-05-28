import React, { FC } from "react";
import ModalOverlay from "../Modaloverlay/ModalOverlay";
import stylesModal from "./Modal.module.css";
import ReactDOM from "react-dom";


interface IModalProps {
    activeModal: boolean;
    closeModal: () => void;
    children: React.ReactNode;
}

const Modal: FC<IModalProps> = ({ activeModal, children }) => {
    const modalContainer: Element = document.getElementById(
        "modal-root"
    ) as Element;



    return ReactDOM.createPortal(
        <ModalOverlay  isActive={activeModal}>
            <div className={stylesModal.modal__container}>
                <div className={`${stylesModal.container}`}>{children}</div>
            </div>
        </ModalOverlay>,
        modalContainer
    );
};

export default Modal;