import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { changeMinuteToHour } from '../../../utils/helpers';
import baseUrls from '../../../utils/base-urls';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./style.module.css";
import ShowMsg from './show-msg';
import { showMsgAction, toggleSuccessMsgAction } from '../../../store/main-store/actions';
import AddMeta from '../../tools/add-meta';

const MovieDetails = () => {
    const movie = useSelector(state => state.apiReducer.movie);
    const { showMsg } = useSelector(state => state.mainReducer);
    const dispatch = useDispatch();

    const localStorageData = JSON.parse(localStorage.getItem("reactMovieData")) || [];

    const setToLocal = (localData, movie) => {
        if (localData.length > 0) {
            const list = localData.filter(item => item.id === movie.id);
            if (list.length === 0) {
                localStorage.setItem("reactMovieData", JSON.stringify([...localData, movie]));
                dispatch(toggleSuccessMsgAction(true));
            } else {
                dispatch(toggleSuccessMsgAction(false));
            }
        } else if (localData.length === 0) {
            localStorage.setItem("reactMovieData", JSON.stringify([...localData, movie]));
            dispatch(toggleSuccessMsgAction(true));
        }
    }

    const showMsgOnTime = (miliSec = 1000) => {
        dispatch(showMsgAction(true));
        setTimeout(() => dispatch(showMsgAction(false)), miliSec);
    }

    const hadndleAddToFavorites = (movie) => {
        const movieInfo = {
            id: movie.id,
            title: movie.title,
            vote_average: movie.vote_average,
            poster_path: movie.poster_path,
            release_date: movie.release_date
        }

        setToLocal(localStorageData, movieInfo);
        showMsgOnTime();
    }

    return (
        <React.Fragment>
            <AddMeta title={movie.title} />
            <div className={styles.movieDetails} style={{backgroundImage: movie.backdrop_path && `url(${baseUrls.basePictureUrl}${movie.backdrop_path})` }}>
                <div className={styles.detailsInner}>
                    <div className={styles.poster}>
                        {movie.poster_path ? <img src={`${baseUrls.basePictureUrl}/${movie.poster_path}`} alt={movie.title} /> :
                            null}
                    </div>
                    <div className={styles.body}>
                        <div className={styles.head} >
                            <h3 className={styles.title}>{movie.title}</h3>
                            <span className={styles.addToFavorite} onClick={() => hadndleAddToFavorites(movie)}><FontAwesomeIcon icon={faHeart} style={{ color: "#c30606" }} /> Add to favorites</span>
                        </div>
                        <div className={styles.info}>
                            <span className={styles.releaseDate}><FontAwesomeIcon icon={faCalendarAlt} /> {movie.release_date} ({movie.original_language}) {changeMinuteToHour(movie.runtime)}</span>
                            <span className={styles.vote}><FontAwesomeIcon icon={faStar} style={{ color: "gold" }} /> {movie.vote_average}/10 ({movie.vote_count})</span>
                            <span className={styles.genres}>{movie.genres && movie.genres.map(genre => (`${genre.name}. `))}</span>
                        </div>
                        {movie.tagline && <div className={styles.tagline}>{movie.tagline}</div>}
                        <p className={styles.overview}>{movie.overview}</p>
                    </div>
                </div>
                {showMsg && <ShowMsg />}
            </div>
        </React.Fragment>
    );
};

export default MovieDetails;