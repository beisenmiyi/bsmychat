import { useState } from 'react';
import ContactsList from './ContactsList/ContactsList'
import ConversationList from './ConversationList/ConversationList'
import styles from './ConversationListContainer.module.scss'

export default function ConversationListContainer({ leftBarItemSelectedId }) {

    const [conversationCellSelectedId, setConversationCellSelectedId] = useState(-1);
    const [contactCellSelectedId, setContactCellSelectedId] = useState(-1);

    const items = [
        { id: 0, content: <div>头像</div> },
        { id: 1, content: <ConversationList conversationCellSelectedId={conversationCellSelectedId} setConversationCellSelectedId={setConversationCellSelectedId} /> },
        { id: 2, content: <ContactsList contactCellSelectedId={contactCellSelectedId} setContactCellSelectedId={setContactCellSelectedId} /> },
        { id: 3, content: <div>设置</div> }
    ];

    return (
        <div className={styles.root}>
            {
                items.map((item) => (
                    item.id === leftBarItemSelectedId ? item.content : null
                ))
            }
        </div>
    )
}
