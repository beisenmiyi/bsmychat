import styles from './LoginAndRegisterAndResetPasswordButton.module.scss';

export default function LoginAndRegisterAndResetPasswordButton({ content }) {

    return (
        <button type="submit" className={styles.button}>
            <span className={styles.loginButtonText}>
                {content}
            </span>
        </button>
    )
}