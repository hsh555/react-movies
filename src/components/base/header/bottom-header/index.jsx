import styles from "./style.module.css";

const BottomHeader = (props) => {    
    return (
        <div className={styles.bottomHeader}>
            <div className={`${styles.cover} container`}>
                {props.children}
            </div>
        </div>
    );
}

export default BottomHeader;