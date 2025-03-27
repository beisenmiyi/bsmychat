import styles from "./ContactsList.module.scss"

export default function ContactsList({ contactCellSelectedId, setContactCellSelectedId }) {

    const items = [
        { id: 0, content: '联系人1' },
        { id: 1, content: '联系人2' },
        { id: 2, content: '联系人3' },
        { id: 3, content: '联系人4' },
        { id: 4, content: '联系人5' },
        { id: 5, content: '联系人6' },
        { id: 6, content: '联系人7' },
        { id: 7, content: '联系人8' },
        { id: 8, content: '联系人9' },
        { id: 9, content: '联系人10' },
        { id: 10, content: '联系人11' },
        { id: 11, content: '联系人12' },
        { id: 12, content: '联系人13' },
        { id: 13, content: '联系人14' },
        { id: 14, content: '联系人15' },
        { id: 15, content: '联系人16' },
        { id: 16, content: '联系人17' },
        { id: 17, content: '联系人18' },
        { id: 18, content: '联系人19' },
        { id: 19, content: '联系人20' },
    ]

    return (
        <div className={styles.root}>
            <ul>
                {
                    items.map((item) => (
                        <li 
                            key={item.id} 
                            className={contactCellSelectedId === item.id? styles.itemActive : styles.item}
                            onClick={() => setContactCellSelectedId(item.id)}
                        >
                            {item.content}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}