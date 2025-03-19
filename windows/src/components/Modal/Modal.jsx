import styles from "./Modal.module.scss";
import ReactModal from "react-modal";

export default function Modal( { isOpen, onClose, children } ) {

    return (
        <ReactModal
            className={styles.Modal}
            overlayClassName={styles.ModalBackdrop}
            isOpen={isOpen}
        >
            <div>{children}</div>
            <button onClick={onClose} className={styles.closeModalButton}>确定</button>
        </ReactModal>
    )
}