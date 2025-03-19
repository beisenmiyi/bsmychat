import { useState } from "react";
import styles from "./LoginPage.module.scss"
import { Link, useNavigate } from "react-router-dom";
import LoginAndRegisterAndResetPasswordButton from "../../components/LoginAndRegisterAndResetPasswordButton/LoginAndRegisterAndResetPasswordButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/Modal/Modal";

export default function LoginPage() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isOpenAuthenticationModal, setIsOpenAuthenticationModal] = useState(false);
    const [isOpenInternalServerModal, setIsOpenInternalServerModal] = useState(false);
    const [isOpenNetworkModal, setIsOpenNetworkModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch ("http://localhost:8080/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({username, password})
            })
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("userid", data);
                navigate("/main");
                setIsLoading(false);
            } else if (response.status === 401) {
                setIsOpenAuthenticationModal(true);
                setIsLoading(false);
            } else {
                setIsOpenInternalServerModal(true);
                setIsLoading(false);
            }

        } catch (error) {
            setIsOpenNetworkModal(true);
            setIsLoading(false);
        }
    }  

    return (<>
        <div className={styles.root}>
            <form action="" className={styles.form} onSubmit={handleSubmit}>
                <h2>登录</h2>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="用户名"
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                    required
                />
                <input
                    type="password"
                    className={styles.input} 
                    placeholder="密码"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    required
                />
                <div className={styles.registerAndResetpassword}>
                    <Link to="/resetPassword" className={styles.link}>忘记密码？</Link>
                    <Link to="/register" className={styles.link}>没有账号？</Link>
                </div>
                <LoginAndRegisterAndResetPasswordButton content={isLoading ? <>{"登录中..."}<FontAwesomeIcon icon={faSpinner} spinPulse /></> : "登录"} />
            </form>
        </div>
        <Modal isOpen={isOpenAuthenticationModal} onClose={() => setIsOpenAuthenticationModal(false)}>用户名或密码错误，请重新输入！</Modal>
        <Modal isOpen={isOpenInternalServerModal} onClose={() => setIsOpenInternalServerModal(false)}>服务器错误，请稍后再试！</Modal>
        <Modal isOpen={isOpenNetworkModal} onClose={() => setIsOpenNetworkModal(false)}>网络错误，请检查网络连接！</Modal>
    </>)
}