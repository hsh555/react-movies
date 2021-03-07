import { faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./style.module.css";

const CopyWrite = () => {
    return (
        <div className={styles.copyWrite}>
            Created by Hadi with <FontAwesomeIcon icon={faHeart} /> and <FontAwesomeIcon icon={faCoffee} />
        </div>
    );
}

export default CopyWrite;