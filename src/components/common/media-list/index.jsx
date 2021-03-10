import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabAction } from "../../../store/api-store/actions";
import baseUrls from "../../../utils/base-urls";
import SingleLoader from "../single-loader";
import tabItems from "./utils/tab-items";
import styles from "./style.module.css";
import { fetchImagesAction, fetchVideoesAction } from "../../../store/api-store/thunk-actions";

const MediaList = (props) => {
    const { posters, videoes, activeTab, backdrops, tabLoading } = useSelector(state => state.apiReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        getFromApi(activeTab);
    }, [props.id, activeTab]);

    const getFromApi = async (tabNumber) => {
        if (tabNumber === 1 || tabNumber === 2) {
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
        return (tabItems.map((item, index) => {
            if (item.tab === activeTab) {
                return <span key={index} data-tab={item.tab} className={styles.active}>{item.name}({getLength(item.tab)})</span>
            } else {
                return <span key={index} data-tab={item.tab}>{item.name}({getLength(item.tab)})</span>
            }
        }));
    }

    const renderData = (tab) => {
        if (tab === 1) {
            return posters.map((item, index) => (
                <img key={index} className={styles.poster} src={`${baseUrls.basePictureUrl}/${item.file_path}`} alt={item.title} />
            )
            )
        }
        else if (tab === 2) {
            return backdrops.map((item, index) =>
            (
                <img key={index} className={styles.backdrop} src={`${baseUrls.basePictureUrl}/${item.file_path}`} alt={item.title} />
            )
            )
        } else {
            return videoes.map((item, index) => (
                <iframe key={index} width="560" height="315" src={`${baseUrls.baseVideoesUrl}/${item.key}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            )
            )
        }
    }

    return (
        <div className="cardGroup container">
            <div className={styles.head}>
                <h2>Media</h2>
                <div className={styles.cardGroupTabs} onClick={(e) => handleTabs(e)}>
                    {renderTabs()}
                </div>
            </div>
            <div className="cardArea scrollbar">
                {tabLoading ? <SingleLoader /> : renderData(activeTab)}
            </div>
        </div>
    );
};

export default MediaList;