import baseUrls from "../../../utils/base-urls";
import styles from "./style.module.css";

const Card = (props) => {
    return (
        <div className={styles.castCard}>
            <div className={styles.cardInner}>
                {props.image ? <img className={styles.cardImage} alt={props.character} src={`${baseUrls.basePictureUrl}/${props.image}`} /> :
                    null
                }
            </div>
            <p>{props.name}</p>
            <p className={styles.character}>{props.character}</p>
        </div>
    );
}

export default Card;