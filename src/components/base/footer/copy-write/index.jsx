import { faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./style.module.css";

const CopyWrite = () => {
    return (
        <div className={styles.copyWrite}>
            Created by Hadi with 
            <span className="color-red"><FontAwesomeIcon icon={faHeart} /></span>
             and 
             <span className="color-grey"><FontAwesomeIcon icon={faCoffee} /></span>
        </div>
    );
}

export default CopyWrite;