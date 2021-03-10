import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsSearchMovieAction } from "../../../../../../store/api-store/actions";
import styles from "./style.module.css";

const TopHeaderSearchArea = () => {
    const { isSearchMovieOpen } = useSelector(state => state.apiReducer);
    const dispatch = useDispatch();

    const handleOnClick = (e) => {
        if (e.currentTarget.dataset.icon === "close") {
            dispatch(toggleIsSearchMovieAction(false));
        } else if (e.currentTarget.dataset.icon === "search") {
            dispatch(toggleIsSearchMovieAction(true));
        }
    }

    return (
        <div className={styles.searchIcon}>
            {isSearchMovieOpen ? <span  onClick={e => handleOnClick(e)} data-icon="close"><FontAwesomeIcon icon={faTimes} /></span> :
                <span  onClick={e => handleOnClick(e)} data-icon="search"> <FontAwesomeIcon icon={faSearch} /></span>
            }
        </div>
    );
}

export default TopHeaderSearchArea;