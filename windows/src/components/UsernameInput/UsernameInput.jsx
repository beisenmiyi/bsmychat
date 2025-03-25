import styles from './UsernameInput.module.scss';

export default function UsernameInput({ type, placeholder, onChange, value }) {
    return (<>
        <input 
            type={type} 
            placeholder={placeholder} 
            className={styles.input} 
            onChange={onChange}
            value={value}
            required 
        />
    </>)
}