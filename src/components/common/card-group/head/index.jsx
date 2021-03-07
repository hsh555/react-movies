
import { useState } from "react";
import { useSelector } from "react-redux";
import tabItems from "../utils/tab-items";
import styles from "./style.module.css";

const Head = (props) => {    
    const handleTabs = (e) => {
        if (e.target.dataset.type === "movie") {
            props.activeTabAction("movie");
        } else {
            props.activeTabAction("tv");
        }
    }
    return (
        <div className={styles.head}>
            <h2>{props.title === "top_rated" ? "top rated" : props.title}</h2>
            <div className={styles.cardGroupTabs} onClick={e => handleTabs(e)}>
                {tabItems.map(item => (
                    item.name === props.activeTab ? <span data-type={item["data-type"]} className={styles.active}>{item.value}</span> :
                        <span data-type={item["data-type"]}>{item.value}</span>
                ))}
            </div>
        </div>
    );
}

export default Head;