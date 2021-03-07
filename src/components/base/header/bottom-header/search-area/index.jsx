import styles from "./style.module.css";

const SearchArea = () => {
    return (
        <div className={styles.searchArea}>
            <input type="text" placeholder="Search for a movie, tv show, person....." />
            <button className={styles.searchButton}>search</button>
        </div>
    );
}

export default SearchArea;