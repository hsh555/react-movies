import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import useOutsideClick from "../../../hooks/useOutsideClick";
import { authModalActiveFormAction } from "../../../store/auth-store/actions";
import LoginForm from "../login-form";
import SignUpForm from "../signup-form";
import './style.scss';

const AuthModal = () => {
    const { showAuthModal, authModalActiveForm } = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const authModal = useRef();

    // useOutsideClick({ target: authModal, action: setShowAuthModalAction });

    const handleSwitchForm = (activeForm) => {
        dispatch(authModalActiveFormAction(activeForm))
    }

    return (
        showAuthModal ? (<div className="auth-modal-wrapper" ref={authModal}>
            <div className="auth-modal-inner">

                {/* <div className="auth-modal-content"> */}
                <div className="auth-modal-tab-header">
                    <div className={`auth-modal-tab-title ${authModalActiveForm === 'signUp' && 'active'}`} onClick={() => handleSwitchForm("signUp")}>Sign Up</div>
                    <div className={`auth-modal-tab-title ${authModalActiveForm === 'Login' && 'active'}`} onClick={() => handleSwitchForm("Login")}>Login</div>
                </div>
                <div className="auth-modal-tab-content">
                    {authModalActiveForm === 'Login' ? <LoginForm /> : <SignUpForm />}
                </div>
                {/* </div> */}
            </div>
        </div>) : null
    );
}

export default AuthModal;