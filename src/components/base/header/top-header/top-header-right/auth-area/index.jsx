import { useDispatch } from "react-redux";
import {setShowAuthModalAction} from "../../../../../../store/auth-store/actions";
import styles from "./style.module.css";

const AuthArea = () => {
    const dispatch = useDispatch();

    const handleAuthModal = (activeForm) => {
        dispatch(setShowAuthModalAction({ show: true, activeForm: activeForm }));
    }
    
    return (
        <div className={styles.authArea}>
            <button onClick={() => handleAuthModal("signUp")}>Sign Up</button>
            <button onClick={() => handleAuthModal("Login")}>Login</button>
        </div>
    );
}

export default AuthArea;