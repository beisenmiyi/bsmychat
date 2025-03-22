import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoginAndRegisterAndResetPasswordButton from '../../components/LoginAndRegisterAndResetPasswordButton/LoginAndRegisterAndResetPasswordButton';
import styles from './ResetPasswordPage.module.scss';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import WindowHeader from '../../components/WindowHeader/WindowHeader';

export default function ResetPasswordPage() {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isOpenOkModal, setIsOpenOkModal] = useState(false);
    const [isOpenNotFoundModal, setIsOpenNotFoundModal] = useState(false);
    const [isOpenPasswordDifferentModal, setIsOpenPasswordDifferentModal] = useState(false);
    const [isOpenNetworkModal, setIsOpenNetworkModal] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        if (password !== confirmPassword) {
            setIsOpenPasswordDifferentModal(true);
            setIsLoading(false);
            return;
        }
        try {
            const response = await fetch("http://localhost:8080/resetPassword", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username, password})
            });
            if (response.ok) {
                setIsOpenOkModal(true);
                setIsLoading(false);
            } else {
                setIsOpenNotFoundModal(true);
                setIsLoading(false);
            }
        } catch (error) {
            console.error(error);
            setIsOpenNetworkModal(true);
            setIsLoading(false);
        }
    }

    return (
        <div className={styles.root}>
            <WindowHeader />
            <div className={styles.formContainer}>
                <form action="" className={styles.form} onSubmit={handleSubmit}>
                    <h2>重置密码</h2>
                    <input 
                        type="text" 
                        className={styles.input} 
                        placeholder="用户名" 
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    />
                    <input 
                        type="password" 
                        className={styles.input} 
                        placeholder="新密码" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                    <input 
                        type="password" 
                        className={styles.input} 
                        placeholder="确认密码" 
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        required
                    />
                    <Link to={"/"} className={styles.link} >返回登录</Link>
                    <LoginAndRegisterAndResetPasswordButton content={isLoading ? <>{"重置中..."}<FontAwesomeIcon icon={faSpinner} spinPulse /></> : "重置密码"} />
                </form>
            </div>
            <Modal isOpen={isOpenOkModal} onClose={() => {setIsOpenOkModal(false); navigate("/");}}>重置密码成功</Modal>
            <Modal isOpen={isOpenNotFoundModal} onClose={() => setIsOpenNotFoundModal(false)}>用户不存在</Modal>
            <Modal isOpen={isOpenPasswordDifferentModal} onClose={() => setIsOpenPasswordDifferentModal(false)}>两次密码输入不一致</Modal>
            <Modal isOpen={isOpenNetworkModal} onClose={() => setIsOpenNetworkModal(false)}>网络错误，请检查网络连接！</Modal>
        </div>
    )
}