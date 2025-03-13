import styles from "./LoginPageMain.module.scss"

export default function LoginPageMain() {
    return (
        <div className={styles.root}>
            <form action="">
                <h2>登录</h2>
                <input type="text" name="" id="username" className={styles.inputAndButton} placeholder="用户名"/>
                <input type="password" name="" id="password" className={styles.inputAndButton} placeholder="密码"/>
                <div>
                    <a href="#">忘记密码？</a>
                    <a href="#">没有账号？</a>
                </div>
                <button type="submit" className={styles.inputAndButton}>登录</button>
            </form>
        </div>
    )
}