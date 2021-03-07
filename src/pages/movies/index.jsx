import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import MovieCard from "../../components/common/movie-card";
import SingleLoader from "../../components/common/single-loader";
import Pagination from "../../services/pagination";
import { fetchCardMovieListAction, fetchGenresAction, getGenresAction } from "../../store/api-store/actions";
import baseUrls from "../../utils/base-urls";
import "./style.css";

const Movies = (props) => {
    const { upcomingMovies, totalPages, isLoading, popularMovies, topRatedMovies } = useSelector(state => state.apiReducer);
    const dispatch = useDispatch();

    const search = props.location.search;
    const urlParams = new URLSearchParams(search);
    const type = urlParams.get("type");
    const currentPage = urlParams.get("page") || 1;


    const handleMoviesList = (type) => {
        if (type === "popular") {
            return popularMovies;
        } else if (type === "top_rated") {
            return topRatedMovies;
        } else if (type === "upcoming") {
            return upcomingMovies;
        }
    }

    const moviesList = handleMoviesList(type);

    useEffect(() => {
        getFromApi();
    }, [type, currentPage]);

    const getFromApi = () => {
        dispatch(fetchCardMovieListAction(`${baseUrls.baseApi}/movie/upcoming?api_key=${baseUrls.apiKey}&language=en-US&page=${currentPage},${type}`));
    }

    return (
        <div className="container">
            <div className="seperator">
                <h2>{type} movies</h2>
                <div className="moviesArea">
                    {isLoading ? <SingleLoader /> : moviesList.map(item => (
                        <MovieCard
                            id={item.id}
                            release_date={item.release_date}
                            title={item.title}
                            poster={`${baseUrls.basePictureUrl}/${item.poster_path}`}
                            vote={item.vote_average}
                        />
                    ))}
                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages} type={type} />
            </div>
        </div>
    );
}

export default withRouter(Movies);