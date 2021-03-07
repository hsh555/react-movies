import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom";
import bgImage from "../../assets/images/1.jpg";
import styles from "./style.module.css";
import poster from "../../assets/images/2.jpg";
import PopularMovies from "../../components/common/card-group";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarAlt, faCalendarCheck, faCalendarMinus, faHeart, faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieAction, getMovieAction, getMoviesAction } from '../../store/api-store/actions';
import baseUrls from '../../utils/base-urls';
import { changeMinuteToHour } from '../../helpers';
import CardGroup from '../../components/common/card-group';
import CastList from '../../components/common/castList';
import CastMovieList from '../../components/common/castList';
import RecommendationsList from '../../components/common/recomendation-list';
import MediaList from '../../components/common/media-list';

const Movie = (props) => {
    const movieId = props.match.params.id;
    const movie = useSelector(state => state.apiReducer.movie);
    const dispatch = useDispatch();
    // console.log(movie);


    // useEffect(() => {
    //     getMovie();
    // }, [movieId]);

    // const getMovie = async () => {
    //     const res = await fetch(`${baseUrls.baseApi}/movie/${movieId}?api_key=${baseUrls.apiKey}&language=en-US`);
    //     const jsonRes = await res.json();
    //     dispatch(getMovieAction(jsonRes));
    //     console.log(jsonRes);
    // }


    useEffect(() => {
        getFromApi();
    }, [movieId]);

    const getFromApi = async () => {
        dispatch(fetchMovieAction(`${baseUrls.baseApi}/movie/${movieId}?api_key=${baseUrls.apiKey}&language=en-US`));
    }

    return (
        <React.Fragment>
            <div className={styles.movieDetails} style = {{ backgroundImage: `url(${baseUrls.basePictureUrl}/${movie.backdrop_path})` }}>
            <div className={styles.detailsInner}>
                <div className={styles.poster}>
                    <img src={`${baseUrls.basePictureUrl}/${movie.poster_path}`} />
                </div>
                <div className={styles.body}>
                    <div className={styles.head} >
                        <h3 className={styles.title}>{movie.title}</h3>
                        <span className={styles.addToFavorite}><FontAwesomeIcon icon={faHeart} style={{ color: "red" }} /> Add to favorites</span>
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
            </div>
            <CastMovieList id={movieId}/> 
            <MediaList id={movieId}/>
            <RecommendationsList id={movieId}/>
        </React.Fragment >
    );
};

export default withRouter(Movie);