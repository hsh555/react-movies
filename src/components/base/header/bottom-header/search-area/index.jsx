import { useRef } from "react";
import { withRouter } from "react-router-dom";
import styles from "./style.module.css";

const SearchArea = ({history}) => {
    const inputElement = useRef();
    const handleOnClick = () => {
        history.push(`/search?s=${inputElement.current.value}`);
    }

    const handleOnkeyUp = (e) => {
        const value = e.target.value;
        if(e.code === "Enter" && value.trim().length) {
            history.push(`/search?s=${value}`);
        }
    }
    return (
        <div className={styles.searchArea}>
            <input type="text" placeholder="Search for a movie..." onKeyUp={(e) =>handleOnkeyUp(e)} ref={inputElement}/>
            <button className={styles.searchButton} onClick={handleOnClick}>search</button>
        </div>
    );
}

export default withRouter(SearchArea);