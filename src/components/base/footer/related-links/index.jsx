import styles from "./style.module.css";

const RelatedLinks = () => {
    return (
        <div className={styles.relatedlinks}>
            <h3>Related Links</h3>
            <span>Conact us</span>
            <span>About us</span>
            <span>Support Forums</span>
            <span>System Status</span>
        </div>
    );
}

export default RelatedLinks;