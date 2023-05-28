import React, { ReactNode, FC } from "react";
import stylesModalOverlay from "./ModalOverlay.module.css";
import {useSelector} from "react-redux";


interface IModalOverlayProps {
    isActive: boolean;

    children: ReactNode;
}

const ModalOverlay: FC<IModalOverlayProps> = ({ children }) => {
    const modalActive = useSelector(
        (state: any) => state.auth.modalActive
    );



    return (
        <section className={modalActive ? `${stylesModalOverlay.overlay} ${stylesModalOverlay.overlay_active}` : `${stylesModalOverlay.overlay}`}>
            <div className={stylesModalOverlay.content}>{children}</div>
        </section>
    );
};

export default ModalOverlay;