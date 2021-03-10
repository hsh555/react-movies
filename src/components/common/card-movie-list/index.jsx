import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardMovieListAction } from "../../../store/api-store/thunk-actions";
import baseUrls from "../../../utils/base-urls";
import LoadingMovieCard from "../loading-card";
import MovieCard from "../movie-card";

const CardMovieList = React.memo(
    (props) => {
        const { popularMovies, upcomingMovies, topRatedMovies, isLoading } = useSelector(state => state.apiReducer);
        const dispatch = useDispatch();

        const handleMoviesList = (type) => {
            if (type === "popular") {
                return popularMovies;
            } else if (type === "top_rated") {
                return topRatedMovies;
            } else {
                return upcomingMovies;
            }
        }

        const moviesList = handleMoviesList(props.type);

        useEffect(() => {
            getFromApi(props.type);
        }, [props.type]);

        const getFromApi = async (type) => {
            dispatch(fetchCardMovieListAction(`${baseUrls.baseApi}/movie/${type}?api_key=${baseUrls.apiKey}&language=en-US&page=1,${type}`));
        }

        return (
            <div className="cardGroup container">
                <div className="head">
                    <h2>{props.type.split("_")} Movies</h2>
                </div>
                <div className="cardArea scrollbar">
                    {isLoading ? <LoadingMovieCard /> : moviesList.map((item, index) => {
                        return (
                            <MovieCard
                                key={index}
                                id={item.id}
                                release_date={item.release_date}
                                title={item.title}
                                poster={item.poster_path}
                                vote={item.vote_average}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
);

export default CardMovieList;