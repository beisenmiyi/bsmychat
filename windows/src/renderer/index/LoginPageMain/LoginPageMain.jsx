import { useState } from "react";
import styles from "./LoginPageMain.module.scss"
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function LoginPageMain() {
    ReactModal.setAppElement("#root");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isOpenAuthenticationErrorModal, setIsOpenAuthenticationErrorModal] = useState(false);
    const [isOpenInternalServerErrorModal, setIsOpenInternalServerErrorModal] = useState(false);
    const [isOpenNetworkErrorModal, setIsOpenNetworkErrorModal] = useState(false);
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
                console.log(response.status, "登录成功");
            } else if (response.status === 401) {
                setIsOpenAuthenticationErrorModal(true);
            } else if (response.status === 500) {
                setIsOpenInternalServerErrorModal(true);
            }

        } catch (error) {
            console.error("登录失败:", error);
            setIsOpenNetworkErrorModal(true);
        }
    }  

    return (<>
        <div className={styles.root}>
            <form action="" className={styles.form} onSubmit={handleSubmit}>
                <h2>登录</h2>
                <input
                    type="text"
                    className={`${styles.inputAndButton} ${styles.input}`}
                    placeholder="用户名"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <input
                    type="password"
                    className={`${styles.inputAndButton} ${styles.input}`} 
                    placeholder="密码"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <div className={styles.registerAndResetpassword}>
                    <a href="/src/renderer/resetPassword/index.html" className={styles.a}>忘记密码？</a>
                    <a href="/src/renderer/register/index.html" className={styles.a}>没有账号？</a>
                </div>
                <button type="submit" className={`${styles.inputAndButton} ${styles.button}`}>
                    <span className={styles.loginButtonText}>
                        {isLoading ? <>登录中<FontAwesomeIcon icon={faSpinner} spinPulse></FontAwesomeIcon></> : "登录"}
                    </span>
                </button>
            </form>
        </div>
        <ReactModal
            className={styles.errorModal}
            overlayClassName={styles.errorModalBackdrop}
            isOpen={isOpenAuthenticationErrorModal}
        >
            <div>用户名或密码错误，请重新输入！</div>
            <button onClick={() => {setIsOpenAuthenticationErrorModal(false);setIsLoading(false);}} className={styles.closeErrorModalButton}>确定</button>
        </ReactModal>
        <ReactModal
            className={styles.errorModal}
            overlayClassName={styles.errorModalBackdrop}
            isOpen={isOpenInternalServerErrorModal}
        >
            <div>服务器错误，请稍后再试！</div>
            <button onClick={() => {setIsOpenInternalServerErrorModal(false);setIsLoading(false);}} className={styles.closeErrorModalButton}>确定</button>
        </ReactModal>
        <ReactModal
            className={styles.errorModal}
            overlayClassName={styles.errorModalBackdrop}
            isOpen={isOpenNetworkErrorModal}
        >
            <div>网络错误，请检查网络连接！</div>
            <button onClick={() => {setIsOpenNetworkErrorModal(false);setIsLoading(false);}} className={styles.closeErrorModalButton}>确定</button>
        </ReactModal>
    </>)
}