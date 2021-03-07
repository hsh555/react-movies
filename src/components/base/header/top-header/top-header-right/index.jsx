import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthArea from "./auth-area";
import "./style.css";

const TopHeaderRight = () => {
    return (
        <div className="topHeaderRight">
            <AuthArea />
            <span className="searchIcon">
                <FontAwesomeIcon icon={faSearch} />
            </span>
        </div>
    );
}

export default TopHeaderRight;