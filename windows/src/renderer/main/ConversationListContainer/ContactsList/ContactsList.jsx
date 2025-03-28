import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./ContactsList.module.scss"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function ContactsList({ contactCellSelectedId, setContactCellSelectedId, setConversationBoxSelectedId, setSearchContactResultData }) {

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

    const [username, setUsername] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/getUser?username=${username}`, {
                method: 'GET'
            });
            if (response.ok) {
                const data = await response.json();
                setConversationBoxSelectedId(0);
                setSearchContactResultData(data);
            } else if (response.status === 404) {

            } else {

            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.root}>
            <div className={styles.searchContactContainer}>
                <form className={styles.inputContainer} onSubmit={(event) => handleSearch(event)}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.FontAwesomeIcon} onClick={handleSearch} />
                    <input 
                        type="text" 
                        placeholder="添加好友" 
                        className={styles.input} 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </form>
            </div>
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