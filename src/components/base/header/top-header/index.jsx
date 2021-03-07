import styles from "./style.module.css";

const TopHeader = (props) => {
    return (
        <div className={`${styles.topHeader} container`}>
                {props.children}
        </div>
    );
}

export default TopHeader;