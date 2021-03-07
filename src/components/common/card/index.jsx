import styles from "./style.module.css";
import image from "../../../assets/images/1.jpg";
import PopularMovies from "../card-group";
import { Link } from "react-router-dom";
import baseUrls from "../../../utils/base-urls";


const Card = (props) => {
    return (
        <div className={styles.castCard}>
            <div className={styles.cardInner}>
                {props.image ? <img className={styles.cardImage} src={`${baseUrls.basePictureUrl}/${props.image}`} /> :
                    null
                }
            </div>
            <p>{props.name}</p>
            <p className={styles.character}>{props.character}</p>
        </div>
    );
}

export default Card;