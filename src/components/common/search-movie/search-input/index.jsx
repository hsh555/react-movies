import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleIsSearchMovieAction } from "../../../../store/api-store/actions";
import styles from "./style.module.css";

const SearchInput = (props) => {
    const dispatch = useDispatch();
    const handleOnKeyUp = (e) => {
        const { history } = props;
        if (e.code === "Enter") {
            history.push(`/search?s=${e.target.value}`);
            dispatch(toggleIsSearchMovieAction(false));
        }
    }

    return (
        <div className={styles.searchInput}>
            <input type="text" placeholder="search movies..." onKeyUp={e => handleOnKeyUp(e)} />
        </div>
    );
}

export default withRouter(SearchInput);