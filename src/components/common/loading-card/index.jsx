import React from "react";
import styles from "./style.module.css";

const LoadingMovieCard = () => {
    const loading_items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <React.Fragment>
            {loading_items.map(item => (
                <div key={item} className={styles.loadingCard}>
                    <div className={styles.cardInner}></div>
                    <h3 className={styles.title}></h3>
                </div>
            ))}
        </React.Fragment>
    );
}

export default LoadingMovieCard;