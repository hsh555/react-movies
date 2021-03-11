import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import MovieCard from "../../components/common/movie-card";
import SingleLoader from "../../components/common/single-loader";
import MoviesListLayout from "../../components/layouts/common/movies-list-layout";
import AddMeta from "../../components/tools/add-meta";
import useQuery from "../../hooks/use-query";
import Pagination from "../../services/pagination";
import { FetchSearchMoviesAction } from "../../store/api-store/thunk-actions";
import baseUrls from "../../utils/base-urls";

const Search = (props) => {
    const { searchMovies, totalPages, totalResults, isLoading } = useSelector(state => state.apiReducer);
    const dispatch = useDispatch();
    const query = useQuery();

    const searchKey = query.get("s") || props.history.push("/");
    const currentPage = query.get("page") || 1;



    useEffect(() => {
        getFromApi();
    }, [searchKey, currentPage]);

    const getFromApi = () => {
        dispatch(FetchSearchMoviesAction(`${baseUrls.baseApi}/search/movie?api_key=${baseUrls.apiKey}&language=en-US&query=${searchKey}&page=${currentPage}&include_adult=false`));
    }

    return (
        <MoviesListLayout>
            <AddMeta title={"Search Results"} />
            <h2>Search Results: {!isLoading && `${totalResults} founded`}</h2>
            <div className="moviesArea">
                {isLoading ? <SingleLoader /> : searchMovies.map((item, index) => (
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
            {totalPages && <Pagination currentPage={currentPage} totalPages={totalPages} query={"s"} queryVal={searchKey} />}
        </MoviesListLayout >
    );
}

export default withRouter(Search);