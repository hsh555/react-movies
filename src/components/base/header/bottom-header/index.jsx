import { useState } from "react";
import styles from "./style.module.css";

const BottomHeader = (props) => {
    const [coverPoster, setCoverPoster] = useState("");
    const getCoverPoster = () => {
        // const res = await fetch(`https://api.themoviedb.org/3/movie/${props.type.toLowerCase()}?api_key=9ebc8a9ee76ea9d34180fb6bb7b7ac14&language=en-US&page=1`);
        // const jsonRes = await res.json();
        // setCoverPoster(jsonRes.results);
    }
    return (
        <div className={styles.bottomHeader}>
            <div className={`${styles.cover} container`}>
                {props.children}
            </div>
        </div>
    );
}

export default BottomHeader;