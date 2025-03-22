import styles from "./MainPage.module.scss"
import LeftBar from "./LeftBar/LeftBar"
import ConversationList from "./ConversationList/ConversationList"

export default function MainPage() {
    return (
        <div className={styles.root}>
            <LeftBar />
            <ConversationList />
            
        </div>
    )
}