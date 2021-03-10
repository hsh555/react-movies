import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import MovieCard from "../../components/common/movie-card";
import SingleLoader from "../../components/common/single-loader";
import MoviesListLayout from "../../components/layouts/common/movies-list-layout";
import AddMeta from "../../components/tools/add-meta";
import useQuery from "../../hooks/use-query";
import Pagination from "../../services/pagination";
import { fetchCardMovieListAction } from "../../store/api-store/thunk-actions";
import baseUrls from "../../utils/base-urls";

const Movies = ({history}) => {
    const { upcomingMovies, totalPages, isLoading, popularMovies, topRatedMovies } = useSelector(state => state.apiReducer);
    const dispatch = useDispatch();
    const query = useQuery();
    

    const type = query.get("type");
    if(!type) {
        history.push("/movies?type=popular");
    }
    const currentPage = query.get("page") || 1;

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
        dispatch(fetchCardMovieListAction(`${baseUrls.baseApi}/movie/${type}?api_key=${baseUrls.apiKey}&language=en-US&page=${currentPage},${type}`));
    }

    return (
        <MoviesListLayout>
            <AddMeta title={"Movies"} />
            <h2>{type === "top_rated" ? "top rated" : type} movies</h2>
            <div className="moviesArea">
                {isLoading ? <SingleLoader /> : moviesList && moviesList.map((item, index) => (
                    <MovieCard
                        key={index}
                        id={item.id}
                        release_date={item.release_date}
                        title={item.title}
                        poster={item.poster_path}
                        vote={item.vote_average}
                    />
                ))}
            </div>
            {totalPages && <Pagination currentPage={currentPage} totalPages={totalPages} query={"type"} queryVal={type} />}
        </MoviesListLayout>
    );
}

export default withRouter(Movies);