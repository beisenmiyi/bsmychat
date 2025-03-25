import { Link, useNavigate } from 'react-router-dom';
import styles from './RegisterPage.module.scss';
import { useState } from 'react';
import LoginAndRegisterAndResetPasswordButton from '../../components/LoginAndRegisterAndResetPasswordButton/LoginAndRegisterAndResetPasswordButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../components/Modal/Modal';
import WindowHeader from '../../components/WindowHeader/WindowHeader';
import UsernameInput from '../../components/UsernameInput/UsernameInput';
 
// 注册页面组件
export default function RegisterPage() {
 
    // 状态管理
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isOpenPasswordDifferentModal, setIsOpenPasswordDifferentModal] = useState(false);
    const [isOpenOkModal, setIsOpenOkModal] = useState(false);
    const [isOpenNetworkModal, setIsOpenNetworkModal] = useState(false);
    const [isOpenUsernameExistModal, setIsOpenUsernameExistModal] = useState(false);

    const navigate = useNavigate();
 
    // 表单提交处理函数
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        if (password !== confirmPassword) {
            setIsOpenPasswordDifferentModal(true);
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username, password})
            })
            switch (response.status) {
                case 200: {
                    setIsOpenOkModal(true);
                    setIsLoading(false);
                    break;
                }
                default: {
                    setIsOpenUsernameExistModal(true);
                    setIsLoading(false);
                    break;
                }
            }
        } catch (error) {
            console.error(error);
            setIsOpenNetworkModal(true);
            setIsLoading(false);
        }
    }
 
    // 返回注册页面的 JSX 结构
    return (
        <div className={styles.root}>
            <WindowHeader />
            <div className={styles.formContainer}>
                <form action="" className={styles.form} onSubmit={handleSubmit}>
                    <h2>注册</h2>
                    <UsernameInput 
                        type={"text"} 
                        placeholder={"用户名"} 
                        onChange={(event) => setUsername(event.target.value)} 
                        value={username}
                    />
                    <UsernameInput 
                        type={"password"} 
                        placeholder={"密码"} 
                        onChange={(event) => setPassword(event.target.value)} 
                        value={password}
                    />
                    <UsernameInput 
                        type={"password"}
                        placeholder={"确认密码"}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        value={confirmPassword}
                    />
                    <Link to="/" className={styles.link}>已有账号？ 登录</Link>
                    <LoginAndRegisterAndResetPasswordButton content={isLoading ? <>{"注册中..."}<FontAwesomeIcon icon={faSpinner} spinPulse /></> : "注册"} />
                </form>
            </div>
            <Modal isOpenPasswordDifferentModal={isOpenPasswordDifferentModal} onClose={() => setIsOpenPasswordDifferentModal(false)}>两次密码输入不一致</Modal>
            <Modal isOpen={isOpenOkModal} onClose={() => {setIsOpenOkModal(false); navigate("/");}}>注册成功</Modal>
            <Modal isOpen={isOpenNetworkModal} onClose={() => setIsOpenNetworkModal(false)}>网络错误，请检查网络连接！</Modal>
            <Modal isOpen={isOpenUsernameExistModal} onClose={() => setIsOpenUsernameExistModal(false)}>用户名已存在</Modal>
        </div>
    )
}