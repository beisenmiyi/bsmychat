import { useState } from 'react';
import ContactsList from './ContactsList/ContactsList'
import ConversationList from './ConversationList/ConversationList'
import styles from './ConversationListContainer.module.scss'

export default function ConversationListContainer({ leftBarItemSelectedId, setConversationBoxSelectedId, setSearchContactResultData }) {

    const [conversationCellSelectedId, setConversationCellSelectedId] = useState(-1);
    const [contactCellSelectedId, setContactCellSelectedId] = useState(-1);

    const items = [
        <div>头像</div> ,
        <ConversationList 
            conversationCellSelectedId={conversationCellSelectedId} 
            setConversationCellSelectedId={setConversationCellSelectedId} 
        /> ,
        <ContactsList 
            contactCellSelectedId={contactCellSelectedId} 
            setContactCellSelectedId={setContactCellSelectedId} 
            setConversationBoxSelectedId={setConversationBoxSelectedId} 
            setSearchContactResultData={setSearchContactResultData}
        /> ,
        <div>设置</div> 
    ];

    return (
        <div className={styles.root}>
            {
                items.map((item, index) => (
                    index === leftBarItemSelectedId ? <div key={index}>{item}</div> : null
                ))
            }
        </div>
    )
}
