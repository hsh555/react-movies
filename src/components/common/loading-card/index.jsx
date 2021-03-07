import styles from "./style.module.css";

const LoadingMovieCard = () => {
    return (
        <div className={styles.loadingCard}>
            <div className={styles.cardInner}></div>
            <h3 className={styles.title}></h3>
        </div>
    );
}

export default LoadingMovieCard;