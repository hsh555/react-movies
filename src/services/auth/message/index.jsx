import { faCheck, faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Message = ({ touched, error }) => {
    return (
        touched && error ? <p className="error-message danger">{error}</p> :
            (touched && !error ? <p className="error-message success"><FontAwesomeIcon icon={faCheck} /></p> : null)
    );
};

export default Message;