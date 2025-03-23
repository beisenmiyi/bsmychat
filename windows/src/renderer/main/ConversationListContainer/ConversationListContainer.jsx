import ContactsList from './ContactsList/ContactsList'
import ConversationList from './ConversationList/ConversationList'
import styles from './ConversationListContainer.module.scss'
import { Route, Routes } from 'react-router-dom'

export default function ConversationListContainer() {
    return (
        <div className={styles.root}>
            <Routes>
                <Route path="/" element={<ConversationList />} />
                <Route path="/contacts" element={<ContactsList />} />
            </Routes>
        </div>
    )
}
