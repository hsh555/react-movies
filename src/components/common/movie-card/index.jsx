import { Link } from "react-router-dom";
import React from 'react';
import styles from "./style.module.css";
import baseUrls from "../../../utils/base-urls";

const MovieCard = React.memo(
    (props) => {
        return (
            <div className={styles.cardMovie}>
                <Link to={`/movie/${props.id}`}>
                    <div className={styles.cardInner}>
                    {props.poster ? <img className={styles.cardImage} alt={props.title} src={`${baseUrls.basePictureUrl}/${props.poster}`}/> : null}
                        <div className={styles.info}>
                            <span className={styles.vote}>{props.vote}</span>
                            <p className={styles.released}>Release at {props.release_date}</p>
                        </div>
                    </div>
                    <h3 className={styles.title}>{props.title}</h3>
                </Link>
            </div>
        );
    }
);

export default MovieCard;