import React, { useEffect } from 'react';
import { useParams, withRouter } from "react-router-dom";
import { useDispatch } from 'react-redux';
import baseUrls from '../../utils/base-urls';
import RecommendationsList from '../../components/common/recomendation-list';
import MediaList from '../../components/common/media-list';
import MovieDetails from '../../components/common/movie-detailes';
import CastsList from '../../components/common/castList';
import { scrollTop } from '../../utils/helpers';
import { fetchMovieAction } from '../../store/api-store/thunk-actions';

const Movie = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        getFromApi();
        scrollTop();
    }, [id]);

    const getFromApi = async () => {
        dispatch(fetchMovieAction(`${baseUrls.baseApi}/movie/${id}?api_key=${baseUrls.apiKey}&language=en-US`));
    }

    return (
        <React.Fragment>
            <MovieDetails />
            <CastsList id={id} />
            <MediaList id={id} />
            <RecommendationsList id={id} />
        </React.Fragment >
    );
};

export default withRouter(Movie);