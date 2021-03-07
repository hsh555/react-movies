import React, { useMemo } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
// styles
import './style.css';

const Pagination = (props) => {
    // const [totalProducts, perPageItems] = [105, 3]

    const search = props.location.search;
    console.log(props.location);
    const pathName = `${props.location.pathname}`;
    const urlParams = new URLSearchParams(search);
    // const currentPage = urlParams.get("page") || 50;
    console.log(props.currentPage, props.totalPages);

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
        return pagesList.map(item => {
            if (pagesList.includes(Number(props.currentPage))) {
                if (Number(props.currentPage) === item) {
                    return <Link to={`${pathName}?type=${props.type}&page=${item}`} data-page={item} className="active">{item}</Link>
                } else {
                    return <Link to={`${pathName}?type=${props.type}&page=${item}`} data-page={item}>{item}</Link>
                }
            } else {
                return <Redirect to="/" />
            }
        })
    }

    return (
        <div className="pagination">
            <Link to={`${pathName}?type=${props.type}&page=1`}>
                First
            </Link>
            <Link to={Number(props.currentPage) === 1 ? `${pathName}?type=${props.type}&page=1` : `${pathName}?type=${props.type}&page=${Number(props.currentPage) - 1}`}>
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </Link>
            {renderLinks()}
            <Link to={Number(props.currentPage) === props.totalPages ? `${pathName}?type=${props.type}&page=${props.totalPages}` : `${pathName}?type=${props.type}&page=${Number(props.currentPage) + 1}`}>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Link>
            <Link to={`${pathName}?type=${props.type}&page=${props.totalPages}`}>
                Last
            </Link>
        </div>
    );
};

export default withRouter(Pagination);