import CardGroup from "../card-group";
import CastCard from "../CastCard";
import img from "../../../assets/images/1.jpg";

import styles from "./style.module.css";
import Card from "../card";
import { useDispatch, useSelector } from "react-redux";
import { fetchCastsMovieAction, fetchPeopleMovieAction } from "../../../store/api-store/actions";
import baseUrls from "../../../utils/base-urls";
import { useEffect } from "react";

const CastMovieList = (props) => {
    const { castsMovie } = useSelector(state => state.apiReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        getFromApi();
    }, [props.id]);

    const getFromApi = async () => {
        dispatch(fetchCastsMovieAction(`${baseUrls.baseApi}/movie/${props.id}/credits?api_key=${baseUrls.apiKey}`));
    }
    return (
        <div className={`${styles.cardArea} container`}>
            <div className={`${styles.cardGroup}`}>
                <div className={styles.head}>
                    <h2>Casts</h2>
                </div>
                <div className={`${styles.cardArea} scrollbar`}>
                    {castsMovie.map(item => (
                        <Card name={item.name} character={item.character} image={item.profile_path} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CastMovieList;