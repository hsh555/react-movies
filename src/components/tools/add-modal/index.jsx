import ReactDOM from 'react-dom';

const AddModal = ({ component }) => {
    return ReactDOM.createPortal(
        component,
        document.getElementById("root-portal")
    );
}

export default AddModal;