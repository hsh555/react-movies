import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardMovieListAction } from "../../../store/api-store/actions";
import baseUrls from "../../../utils/base-urls";
import LoadingCard from "../loading-card";
import MovieCard from "../movie-card";
import styles from "./style.module.css";

const CardMovieList = (props) => {
    const { popularMovies, upcomingMovies, topRatedMovies, isLoading } = useSelector(state => state.apiReducer);
    const dispatch = useDispatch();

    const handleMoviesList = (type) => {
        if(type === "popular") {
            return popularMovies;
        }else if(type === "top_rated") {
            return topRatedMovies;
        }else {
            return upcomingMovies;
        }
    }

    const moviesList = handleMoviesList(props.type);

    useEffect(() => {
        getFromApi();
    }, []);

    const getFromApi = async () => {
        dispatch(fetchCardMovieListAction(`${baseUrls.baseApi}/movie/${props.type}?api_key=${baseUrls.apiKey}&language=en-US&page=1,${props.type}`));
    }

    const handleLoading = () => {
        const loading_items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        return loading_items.map(() => <LoadingCard />);
    }



    return (
        <div className={`${styles.cardGroup} container`}>
            <div className={styles.head}>
                <h2>{props.type.split("_")} Movies</h2>
            </div>
            <div className={`${styles.cardArea} scrollbar`}>
                {isLoading ? handleLoading() : moviesList.map(item => {
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
        </div>
    );
};

export default CardMovieList;