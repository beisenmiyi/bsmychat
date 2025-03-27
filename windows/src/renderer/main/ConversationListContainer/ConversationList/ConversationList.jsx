import styles from './ConversationList.module.scss';

export default function ConversationList({ conversationCellSelectedId, setConversationCellSelectedId }) {

    const items = [
        { id: 0, content: '会话1' },
        { id: 1, content: '会话2' },
        { id: 2, content: '会话3' },
        { id: 3, content: '会话4' },
        { id: 4, content: '会话5' },
        { id: 5, content: '会话6' },
        { id: 6, content: '会话7' },
        { id: 7, content: '会话8' },
        { id: 8, content: '会话9' },
        { id: 9, content: '会话10' },
        { id: 10, content: '会话11' },
        { id: 11, content: '会话12' },
        { id: 12, content: '会话13' },
        { id: 13, content: '会话14' },
        { id: 14, content: '会话15' },
        { id: 15, content: '会话16' },
        { id: 16, content: '会话17' },
        { id: 17, content: '会话18' },
        { id: 18, content: '会话19' },
        { id: 19, content: '会话20' },
    ];

    return (
        <div className={styles.root}>
            <ul>
                {
                    items.map((item) => (
                        <li 
                            key={item.id} 
                            className={conversationCellSelectedId === item.id ? styles.itemActive : styles.item}
                            onClick={() => setConversationCellSelectedId(item.id)}
                        >
                            {item.content}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}