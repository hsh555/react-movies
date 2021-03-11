import React, { useMemo } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Pagination = (props) => {
    const pathName = props.location.pathname;

    const pagesList = useMemo(() => {
        const list = [];
        for (let i = 1; i <= props.totalPages; i++) {
            if (i + 1 === Number(props.currentPage) || i - 1 === Number(props.currentPage) || i === Number(props.currentPage)) {
                list.push(i);
            }
        }
        return list;
    }, [props.currentPage, props.totalPages]);

    const renderLinks = () => {
        return pagesList.map((item, index) => {
            if (pagesList.includes(Number(props.currentPage))) {
                if (Number(props.currentPage) === item) {
                    return <Link key={index} to={`${pathName}?${props.query}=${props.queryVal}&page=${item}`} data-page={item} className="active">{item}</Link>
                } else {
                    return <Link key={index} to={`${pathName}?${props.query}=${props.queryVal}&page=${item}`} data-page={item}>{item}</Link>
                }
            } else {
                return <Redirect to={`${pathName}?${props.query}=${props.queryVal}`} />
            }
        })
    }

    return (
        <div className="pagination">
            <Link to={`${pathName}?${props.query}=${props.queryVal}&page=1`}>
                First
            </Link>
            <Link to={Number(props.currentPage) === 1 ? `${pathName}?${props.query}=${props.queryVal}&page=1` : `${pathName}?${props.query}=${props.queryVal}&page=${Number(props.currentPage) - 1}`}>
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </Link>
            {renderLinks()}
            <Link to={Number(props.currentPage) === props.totalPages ? `${pathName}?${props.query}=${props.queryVal}&page=${props.totalPages}` : `${pathName}?${props.query}=${props.queryVal}&page=${Number(props.currentPage) + 1}`}>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Link>
            <Link to={`${pathName}?${props.query}=${props.queryVal}&page=${props.totalPages}`}>
                Last
            </Link>
        </div>
    );
};

export default withRouter(Pagination);