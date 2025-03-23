import WindowHeader from "../../../components/WindowHeader/WindowHeader"
import styles from "./ConversationBoxContainer.module.scss"

export default function ConversationBoxContainer() {
    return (
        <div className={styles.root}>
            <div className={styles.conversationHeader}>
                <div className={styles.conversationName}>会话名称</div>
                <div className={styles.windowHeaderAndOther}>
                    <WindowHeader />
                    <div className={styles.other}></div>
                </div>
            </div>
        </div>
    )
}