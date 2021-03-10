import { Link, withRouter } from "react-router-dom";
import navItems from "./utils/nav-items";
import styles from "./style.module.css";

const NavBar = (props) => {
    const { pathname } = props.location;
    return (
        <div className={styles.navBar}>
            {navItems.map((item, index) => (
                item.hasSubMenu ? (
                    item.path === pathname ?
                        <span key={index} className={`${styles.navItem} ${styles.active}`}>{item.name}
                            {item.subMenu && <div className={styles.subMenu}>
                                {item.subMenu.map((sub, index) => (
                                    <Link key={index} to={`${sub.path}`}>{sub.name}</Link>
                                ))}
                            </div>}
                        </span> :
                        <span key={index} className={`${styles.navItem}`}>{item.name}
                            {item.subMenu && <div className={styles.subMenu}>
                                {item.subMenu.map((sub, index) => (
                                    <Link key={index} to={`${sub.path}`}>{sub.name}</Link>
                                ))}
                            </div>}
                        </span>
                ) : (
                    item.path === pathname ?
                        <Link key={index} to={`${item.path}`} className={`${styles.navItem} ${styles.active}`}>{item.name}</Link> :
                        <Link key={index} to={`${item.path}`} className={styles.navItem}>{item.name}</Link>
                )))}
        </div>
    );
}

export default withRouter(NavBar);