import styles from "./ConversationBoxContainer.module.scss"
import SearchContactResult from "./SearchContactResult/SearchContactResult";

export default function ConversationBoxContainer({ ConversationBoxSelectedId, searchContactResultData }) {

    const items = [
        <SearchContactResult searchContactResultData={searchContactResultData} />
    ];

    return (
        <div className={styles.root}>
            {
                items.map((item, index) => (
                    index === ConversationBoxSelectedId ? <div key={index}>{item}</div> : null
                ))
            }
        </div>
    )
}