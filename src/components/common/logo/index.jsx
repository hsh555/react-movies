import logo from "../../../assets/images/logo2.png";
import styles from "./style.module.css";

const Logo = () => {
    return (
        <div className={styles.logoArea}>
            <img src={logo} alt="react movies logo"/>
        </div>
    );
}

export default Logo;