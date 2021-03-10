import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import styles from "./style.module.css";

const ShowMsg = () => {
    const successMsg = useSelector(state => state.mainReducer.successMsg);
    return (
        <div className={styles.msg}>
            {successMsg ? <span className="color-green"><FontAwesomeIcon icon={faCheck} /> Added successfully</span> :
                <span className="color-red" ><FontAwesomeIcon icon={faTimes} /> Already exists</span>
            }
        </div>
    );
}

export default ShowMsg;