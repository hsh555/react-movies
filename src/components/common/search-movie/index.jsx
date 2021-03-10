import { faLongArrowAltUp, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleIsSearchMovieAction } from "../../../store/api-store/actions";
import { fetchSearchTrends } from "../../../store/api-store/thunk-actions";
import baseUrls from "../../../utils/base-urls";
import SingleLoader from "../single-loader";
import SearchInput from "./search-input";
import styles from "./style.module.css";

const SearchMovie = () => {
    const {searchTrends, isLoading} = useSelector(state => state.apiReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        getFromApi();
    }, []);

    const getFromApi = () => {
        dispatch(fetchSearchTrends(`${baseUrls.baseApi}/trending/movie/day?api_key=${baseUrls.apiKey}`));
    }

    const handleOnClick = () => {
        dispatch(toggleIsSearchMovieAction(false));
    }

    return (
        <div className={`${styles.searchMovie} container`}>
            <SearchInput />
            <div className={styles.trends} onClick={handleOnClick}>
                <h2><FontAwesomeIcon icon={faLongArrowAltUp} /> Trending</h2>
                {isLoading ? <SingleLoader /> :searchTrends.map((item, index) => (
                    <Link key={index} to={`/movie/${item.id}`}><p onClick={e => handleOnClick(e)}><FontAwesomeIcon icon={faSearch} /> {item.title}</p></Link>
                ))}
            </div>
        </div>
    );
}

export default SearchMovie;