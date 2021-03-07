import Logo from "../../../../common/logo";
import NavBar from "../../../../common/navbar";
import styles from "./style.module.css";

const TopHeaderLeft = () => {
    return (
        <div className={styles.topHeaderLeft}>
            <Logo />
            <NavBar />
        </div>
    );
}

export default TopHeaderLeft;