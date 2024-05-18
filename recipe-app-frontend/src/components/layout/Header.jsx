import Navigation from "./Navigation";
import styles from "./Header.module.css";

export default function Header() {
    return (
    <header className={styles.header}>
        <h1>Todos App</h1>

        <Navigation />
    </header>
    );
}