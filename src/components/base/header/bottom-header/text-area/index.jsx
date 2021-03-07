import styles from "./style.module.css";

const TextArea = () => {
    return (
        <div className={styles.textArea}>
            <h2 className={styles.textTitle}>Welcome.</h2>
            <p className={styles.textBody}>Millions of movies, TV shows and people to discover. Explore now.</p>
        </div>
    );
}

export default TextArea;