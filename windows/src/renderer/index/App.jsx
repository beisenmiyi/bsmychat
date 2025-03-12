import WindowHeader from "./WindowHeader/WindowHeader";
import styles from "./App.module.scss";

export default function App() {
    return (
        <div className={styles.root}>
            <WindowHeader />
        </div>
    )
}