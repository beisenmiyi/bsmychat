import styles from "./MainPage.module.scss"
import LeftBar from "./LeftBar/LeftBar"
import ConversationListContainer from "./ConversationListContainer/ConversationListContainer"
import ConversationBoxContainer from "./ConversationBox/ConversationBoxContainer"
import { useState } from "react"

export default function MainPage() {

    const [leftBarItemSelectedId, setLeftBarItemSelectedId] = useState(1)

    return (
        <div className={styles.root}>
            <LeftBar leftBarItemSelectedId={leftBarItemSelectedId} setLeftBarItemSelectedId={setLeftBarItemSelectedId} />
            <ConversationListContainer leftBarItemSelectedId={leftBarItemSelectedId} />
            <ConversationBoxContainer />
        </div>
    )
}