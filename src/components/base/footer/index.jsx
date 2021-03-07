import styles from "./style.module.css";

const Footer = (props) => {
    return (
        <div className={`${styles.footer} container`}>
            {props.children}
        </div>
    );
}

export default Footer;