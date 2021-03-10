import { createAction } from "@reduxjs/toolkit";
import ACTION_TYPES from "./action-types";

const toggleLoadingAction = createAction(ACTION_TYPES.TOGGLE_LOADING);

const getMoviesAction = createAction(ACTION_TYPES.GET_MOVIES);

const toggleTabLoadingAction = createAction(ACTION_TYPES.TOGGLE_TAB_LOADING);

const getMovieAction = createAction(ACTION_TYPES.GET_MOVIE);

const getPopularMoviesAction = createAction(ACTION_TYPES.GET_POPULAR_MOVIES);

const getTopRatedMoviesAction = createAction(ACTION_TYPES.GET_TOP_RATED_MOVIES);

const getUpcomingMoviesAction = createAction(ACTION_TYPES.GET_UPCOMING_MOVIES);

const getCastsMovieAction = createAction(ACTION_TYPES.GET_CASTS_MOVIE);

const getPostersAction = createAction(ACTION_TYPES.GET_POSTERS);

const getBackdropsAction = createAction(ACTION_TYPES.GET_BACKDROPS);

const getRecommendationsAction = createAction(ACTION_TYPES.GET_RECOMMENDATIONS);

const getVideoesAction = createAction(ACTION_TYPES.GET_VIDEOES);

const getGenresAction = createAction(ACTION_TYPES.GET_GENRES);

const handleCardGroupActiveTabAction = createAction(ACTION_TYPES.HANDLE_CARD_GROUP_ACTIVE_TAB);

const setActiveTabAction = createAction(ACTION_TYPES.SET_ACTIVE_TAB);

const setTotalPagesAction = createAction(ACTION_TYPES.SET_TOTAL_PAGES);

const toggleIsSearchMovieAction = createAction(ACTION_TYPES.TOGGLE_IS_SEARCH_MOVIE);

const getSearchTrendsAction = createAction(ACTION_TYPES.GET_SEARCH_TRENDS);

const getTotalResultsAction = createAction(ACTION_TYPES.GET_TOTAL_RESULTS);

const getSearchMoviesAction = createAction(ACTION_TYPES.GET_SEARCH_MOVIES);

export {
    getMovieAction,
    getPopularMoviesAction,
    toggleTabLoadingAction,
    getMoviesAction,
    getTopRatedMoviesAction,
    getUpcomingMoviesAction,
    getPostersAction,
    getBackdropsAction,
    getRecommendationsAction,
    getVideoesAction,
    setTotalPagesAction,
    getSearchTrendsAction,
    getTotalResultsAction,
    toggleIsSearchMovieAction,
    getCastsMovieAction,
    setActiveTabAction,
    getGenresAction,
    getSearchMoviesAction,
    toggleLoadingAction,
    handleCardGroupActiveTabAction
};