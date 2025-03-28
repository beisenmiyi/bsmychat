import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./WindowHeader.module.scss"
import { faMinus, faXmark } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-regular-svg-icons"

export default function WindowHeader() {

    const handleCloseButton = () => {
        window.electronAPI.send("closeWindow");
    }

    const handleMaximizeButton = () => {
        window.electronAPI.send("maximizeOrUnmaximizeWindow");
    }

    const handleMinimizeButton = () => {
        window.electronAPI.send("minimizeWindow");
    }

    return (
        <div className={styles.root}>
            <button className={`${styles.button} ${styles.closeButton}`} onClick={handleCloseButton}><FontAwesomeIcon icon={faXmark} className={styles.FontAwesomeIcon} /></button>
            <button className={styles.button} onClick={handleMaximizeButton}><FontAwesomeIcon icon={faSquare} className={styles.FontAwesomeIcon} /></button>
            <button className={styles.button} onClick={handleMinimizeButton}><FontAwesomeIcon icon={faMinus} className={styles.FontAwesomeIcon} /></button>
        </div>
    )
}