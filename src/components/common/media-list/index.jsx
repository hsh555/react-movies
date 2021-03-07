import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImagesAction, fetchVideoesAction, setActiveTabAction } from "../../../store/api-store/actions";
import baseUrls from "../../../utils/base-urls";
import LoadingCard from "../loading-card";
import MovieCard from "../movie-card";
import SingleLoader from "../single-loader";
import styles from "./style.module.css";
import tabItems from "./utils/tab-items";

const MediaList = (props) => {
    const { posters, videoes, activeTab, backdrops, tabLoading } = useSelector(state => state.apiReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        getFromApi(activeTab);
    }, [props.id, activeTab]);

    const getFromApi = async (tabNumber) => {
        if (tabNumber === 1 || tabNumber === 2) {
            console.log("hellooo")
            dispatch(fetchImagesAction(`${baseUrls.baseApi}/movie/${props.id}/images?api_key=${baseUrls.apiKey}&language=en-US&include_image_language=en,null`));
        } else {
            dispatch(fetchVideoesAction(`${baseUrls.baseApi}/movie/${props.id}/videos?api_key=${baseUrls.apiKey}&language=en-US`));
        }
    }

    const getLength = (num) => {
        if (num === 1) {
            return posters.length;
        } else if (num === 2) {
            return backdrops.length;
        } else {
            return videoes.length;
        }
    };

    const handleTabs = (e) => {
        if (e.target.dataset.tab === "1") {
            dispatch(setActiveTabAction(1));
        } else if (e.target.dataset.tab === "2") {
            dispatch(setActiveTabAction(2));
        } else {
            dispatch(setActiveTabAction(3));
        }
    }


    const renderTabs = () => {
        return (tabItems.map(item => {
            if (item.tab === activeTab) {
                return <span data-tab={item.tab} className={styles.active}>{item.name}({getLength(item.tab)})</span>
            } else {
                return <span data-tab={item.tab}>{item.name}({getLength(item.tab)})</span>
            }
        }));
    }

    const renderData = (tab) => {
        if (tab === 1) {
            console.log(tab)
            return posters.map(item => (
                <img className={styles.poster} src={`${baseUrls.basePictureUrl}/${item.file_path}`} alt={props.movieName} />
            )
            )
        }
        else if (tab === 2) {
            return backdrops.map(item =>
            (
                <img className={styles.backdrop} src={`${baseUrls.basePictureUrl}/${item.file_path}`} alt={props.movieName} />
            )
            )
        } else {
            return videoes.map(item => (
                <iframe width="560" height="315" src={`${baseUrls.baseVideoesUrl}/${item.key}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            )
            )
        }
    }

    return (
        <div className={`${styles.cardGroup} container`}>
            <div className={styles.head}>
                <h2>Media</h2>
                <div className={styles.cardGroupTabs} onClick={(e) => handleTabs(e)}>
                    {renderTabs()}
                </div>
            </div>
            <div className={`${styles.cardArea} scrollbar`}>
                {tabLoading ? <SingleLoader /> : renderData(activeTab)}
            </div>
        </div>
    );
};

export default MediaList;