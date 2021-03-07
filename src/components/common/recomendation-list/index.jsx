import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardMovieListAction, fetchRecommendationsAction } from "../../../store/api-store/actions";
import baseUrls from "../../../utils/base-urls";
import LoadingCard from "../loading-card";
import MovieCard from "../movie-card";
import styles from "./style.module.css";
import {handleLoading} from "../../../helpers";
import LoadingMovieCard from "../loading-card";

const RecommendationsList = (props) => {
    const { recommendations, isLoading } = useSelector(state => state.apiReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        getFromApi();
    }, [props.id]);

    const getFromApi = async () => {
        dispatch(fetchRecommendationsAction(`${baseUrls.baseApi}/movie/${props.id}/recommendations?api_key=${baseUrls.apiKey}&language=en-US&page=1`));
    }

    return (
        recommendations.length > 0 ? <div className={`${styles.cardGroup} container`}>
            <div className={styles.head}>
                <h2>Recomendations</h2>
            </div>
            <div className={`${styles.cardArea} scrollbar`}>
                {isLoading ? handleLoading(<LoadingMovieCard />) : recommendations.map(item => {
                    return (
                        <MovieCard
                            id={item.id}
                            release_date={item.release_date}
                            title={item.title}
                            poster={`${baseUrls.basePictureUrl}/${item.poster_path}`}
                            vote={item.vote_average}
                        />
                    );
                })}
            </div>
        </div> : null
    );
};

export default RecommendationsList;