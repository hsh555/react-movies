 import React from 'react';
import { withRouter } from 'react-router-dom';
import AddMeta from '../../components/tools/add-meta';
import './style.scss';

const NotFound = (props) => {
    const goHome = () => {
        const { history } = props;
        history.push('/');
    }

    const goBack = () => {
        const { history } = props;
        history.goBack();
    }

    return (
        <div className="not-found">
            <AddMeta title={"Not Found"} desc={"page is not found"}/>
            <div className="wrapper">
                <h1>404</h1>
                <p>It seems that you're lost in a perpetual black hole. Let us help guide you out and get you back home.</p>
                <div className="buttons">
                    <button onClick={goBack}>back</button>
                    <button onClick={goHome}>home</button><br />
                    <span>Help me out</span>
                </div>
            </div>
        </div>
    );
}

export default withRouter(NotFound);
