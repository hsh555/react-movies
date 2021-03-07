import styles from "./style.module.css";
import image from "../../../assets/images/cover.jpg";
import PopularMovies from "../card-group";
import { Link } from "react-router-dom";
import React from 'react';


const MovieCard = React.memo(
    (props) => {
        return (
            <div className={styles.cardMovie}>
                <Link to={`/movie/${props.id}`}>
                    <div className={styles.cardInner}>
                        <img className={styles.cardImage} src={props.poster} />
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