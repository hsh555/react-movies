import { Link, withRouter } from "react-router-dom";
import pathes from "../../../router/utils/pathes";
import styles from "./style.module.css";
import navItems from "./utils/nav-items";

const NavBar = (props) => {
    const { pathname } = props.location;
    console.log(props.location)
    return (
        <div className={styles.navBar}>
            {navItems.map(item => (
                item.hasSubMenu ? (
                    item.path === pathname ?
                        <span className={`${styles.navItem} ${styles.active}`}>{item.name}
                            {item.subMenu && <div className={styles.subMenu}>
                                {item.subMenu.map(sub => (
                                    <Link to={`${sub.path}`}>{sub.name}</Link>
                                ))}
                            </div>}
                        </span> :
                        <span className={`${styles.navItem}`}>{item.name}
                            {item.subMenu && <div className={styles.subMenu}>
                                {item.subMenu.map(sub => (
                                    <Link to={`${sub.path}`}>{sub.name}</Link>
                                ))}
                            </div>}
                        </span>
                ) : (
                    item.path === pathname ?
                        <Link to={`${item.path}`} className={`${styles.navItem} ${styles.active}`}>{item.name}</Link> :
                        <Link to={`${item.path}`} className={styles.navItem}>{item.name}</Link>
                )))}
        </div>
    );
}

export default withRouter(NavBar);