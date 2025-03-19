import { Link } from 'react-router-dom';
import styles from './RegisterPage.module.scss';
import { useState } from 'react';
import LoginAndRegisterAndResetPasswordButton from '../../components/LoginAndRegisterAndResetPasswordButton/LoginAndRegisterAndResetPasswordButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function RegisterPage() {

    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className={styles.root}>
            <form action="" className={styles.form}>
                <h2>注册</h2>
                <input type="text" className={styles.input} placeholder="用户名" />
                <input type="password" className={styles.input} placeholder="密码" />
                <input type="password" className={styles.input} placeholder="确认密码" />
                <Link to="/" className={styles.link}>已有账号？ 登录</Link>
                <LoginAndRegisterAndResetPasswordButton content={isLoading ? <>{"注册中..."}<FontAwesomeIcon icon={faSpinner} spinPulse /></> : "注册"} />
            </form>
        </div>
    )
}