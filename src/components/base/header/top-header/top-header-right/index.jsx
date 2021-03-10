import AuthArea from "./auth-area";
import TopHeaderSearchArea from "./top-header-search-area";
import styles from "./style.module.css";

const TopHeaderRight = () => {
    return (
        <div className={styles.topHeaderRight}>
            <AuthArea />
            <TopHeaderSearchArea />
        </div>
    );
}

export default TopHeaderRight;