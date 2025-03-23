import styles from "./MainPage.module.scss"
import LeftBar from "./LeftBar/LeftBar"
import ConversationListContainer from "./ConversationListContainer/ConversationListContainer"
import ConversationBoxContainer from "./ConversationBox/ConversationBoxContainer"

export default function MainPage() {
    return (
        <div className={styles.root}>
            <LeftBar />
            <ConversationListContainer />
            <ConversationBoxContainer />
        </div>
    )
}