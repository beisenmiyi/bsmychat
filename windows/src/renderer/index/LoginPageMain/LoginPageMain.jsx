import { useState } from "react";
import styles from "./LoginPageMain.module.scss"

export default function LoginPageMain() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            fetch ("http://localhost:8080/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({username, password})
            }).then(response => {
                if (response.ok) {
                    console.log(response.status, "登录成功");
                } else {
                    console.log(response.status, "登录失败");
                }
            })
        } catch (error) {
            console.error("登录失败:", error);
        }
    }  

    return (
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
                <button type="submit" className={`${styles.inputAndButton} ${styles.button}`}><span className={styles.loginButtonText}>登录</span></button>
            </form>
        </div>
    )
}