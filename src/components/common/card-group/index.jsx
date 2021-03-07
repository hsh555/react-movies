
import { useEffect, useMemo, useRef, useState } from "react";
import image from "../../../assets/images/cover.jpg";
import Card from "../movie-card";
import styles from "./style.module.css";
import baseUrls from "../../../utils/base-urls";
import CardMovie from "../movie-card";
import ACTION_TYPES from "../../../store/api-store/action-types";
import { getMoviesAction, toggleLoadingAction, fetchDataAction, handleCardGroupActiveTabAction } from "../../../store/api-store/actions";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../movie-card";
import LoadingCard from "../loading-card";
import tabItems from "./utils/tab-items";
import Head from "./head";

const CardGroup = (props) => {
    const [activeTab, setActiveTab] = useState("movie");
    const { isLoading } = useSelector(state => state.apiReducer);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     getFromApi(props.activeTab);
    // }, [props.activeTab]);

    // const getFromApi = async (tab) => {
    //     dispatch(fetchDataAction(`${baseUrls.baseApi}/${tab}/${props.title}?api_key=${baseUrls.apiKey}&language=en-US&page=1,${props.title}`));
    // }

    const handleLoading = () => {
        const loading_items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        return loading_items.map(() => <LoadingCard />);
    }

    // const handleTabs = (e) => {
    //     if (e.target.dataset.type === "movie") {
    //         props.setActiveTab("movie");
    //     } else {
    //         props.setActiveTab("tv");
    //     }
    // }

    return (
        <div className={`${styles.cardGroup}`}>
            {/* <div className={styles.head}>
                <h2>{props.title === "top_rated" ? "top rated" : props.title}</h2>
                <div className={styles.cardGroupTabs} onClick={e => handleTabs(e)}>
                    {tabItems.map(item => (
                         item.name === props.activeTab ? <span data-type={item["data-type"]} className={styles.active}>{item.value}</span>:
                         <span data-type={item["data-type"]}>{item.value}</span>
                    ))}
                </div>
            </div> */}
            <div className={`${styles.cardArea} scrollbar`}>
                {isLoading ? handleLoading() : props.list.map(movie => {
                    return (
                        <MovieCard
                            id={movie.id}
                            release_date={movie.release_date}
                            title={movie.title ? movie.title : movie.name}
                            poster={`${baseUrls.basePictureUrl}/${movie.poster_path}`}
                            vote={movie.vote_average}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default CardGroup;