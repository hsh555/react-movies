import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useOutsideClick = ({ target, action }) => {
    const dispatch = useDispatch();
    const myFunc = (e) => {
        if (e.target === target.current) {
            dispatch(action(false));
        }
        return;
    }
    useEffect(() => {
        window.addEventListener('click', myFunc);
    }, [myFunc]);

    window.removeEventListener('click', myFunc);
};

export default useOutsideClick;