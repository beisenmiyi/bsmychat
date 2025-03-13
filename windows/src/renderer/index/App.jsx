import WindowHeader from "../../components/WindowHeader/WindowHeader";
import styles from "./App.module.scss";
import LoginPageMain from "./LoginPageMain/LoginPageMain";

export default function App() {
    return (
        <div className={styles.root}>
            <WindowHeader />
            <LoginPageMain />
        </div>
    )
}