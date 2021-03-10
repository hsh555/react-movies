import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import baseUrls from "../../../utils/base-urls";
import MovieCard from "../movie-card";
import LoadingMovieCard from "../loading-card";
import { fetchRecommendationsAction } from "../../../store/api-store/thunk-actions";

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
        recommendations.length > 0 ? <div className="cardGroup container">
            <div className="head">
                <h2>Recomendations</h2>
            </div>
            <div className="cardArea scrollbar">
                {isLoading ? <LoadingMovieCard /> : recommendations.map((item, index) => {
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
        </div> : null
    );
};

export default RecommendationsList;