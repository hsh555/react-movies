import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import ACTION_TYPES from "./action-types";

const toggleLoadingAction = createAction(ACTION_TYPES.TOGGLE_LOADING);
const getMoviesAction = createAction(ACTION_TYPES.GET_MOVIES);
const getTvShowsAction = createAction(ACTION_TYPES.GET_TV_SHOWS);
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

const fetchGenresAction = createAsyncThunk(
    "genres/fetch",
    async (url, thunkOptions) => {
        const { dispatch } = thunkOptions;
        const res = await fetch(url);
        const jsonRes = await res.json();
        dispatch(getGenresAction(jsonRes.genres));
    }
);

const fetchVideoesAction = createAsyncThunk(
    "videoes/fetch",
    async (url, thunkOptions) => {
        const { dispatch } = thunkOptions;
        dispatch(toggleTabLoadingAction(true));
        const res = await fetch(url);
        const jsonRes = await res.json();
        console.log(jsonRes.results);
        dispatch(getVideoesAction(jsonRes.results));
        // dispatch(getPostersAction(jsonRes.posters));
        // dispatch(getBackdropsAction(jsonRes.backdrops));
        dispatch(toggleTabLoadingAction(false));
    }
);

const fetchImagesAction = createAsyncThunk(
    "images/fetch",
    async (url, thunkOptions) => {
        const { dispatch } = thunkOptions;
        dispatch(toggleTabLoadingAction(true));
        const res = await fetch(url);
        const jsonRes = await res.json();
        dispatch(getPostersAction(jsonRes.posters));
        dispatch(getBackdropsAction(jsonRes.backdrops));
        dispatch(toggleTabLoadingAction(false));
    }
);

const fetchCardMovieListAction = createAsyncThunk(
    "moviesList/fetch",
    async (info, thunkOptions) => {
        const { dispatch } = thunkOptions;
        const [url, title] = info.split(",");
        dispatch(toggleLoadingAction(true));
        const res = await fetch(url);
        const jsonRes = await res.json();
        console.log(jsonRes.results);
        dispatch(setTotalPagesAction(jsonRes.total_pages));
        console.log(jsonRes.total_pages, "salan");
        if (title === "popular") {
            dispatch(getPopularMoviesAction(jsonRes.results));
        } else if (title === "top_rated") {
            dispatch(getTopRatedMoviesAction(jsonRes.results));
        } else if (title === "upcoming") {
            dispatch(getUpcomingMoviesAction(jsonRes.results));
        }
        dispatch(toggleLoadingAction(false));
    }
);

const fetchMovieAction = createAsyncThunk(
    "movie/fetch",
    async (url, thunkOptions) => {
        const { dispatch } = thunkOptions;
        dispatch(toggleLoadingAction(true));
        const res = await fetch(url);
        const jsonRes = await res.json();
        console.log(jsonRes);

        dispatch(getMovieAction(jsonRes));
        dispatch(toggleLoadingAction(false));
    }
);

const fetchCastsMovieAction = createAsyncThunk(
    "castsMovie/fetch",
    async (url, thunkOptions) => {
        const { dispatch } = thunkOptions;
        dispatch(toggleLoadingAction(true));
        const res = await fetch(url);
        const jsonRes = await res.json();
        dispatch(getCastsMovieAction(jsonRes.cast));
        dispatch(toggleLoadingAction(false));
    }
);

const fetchRecommendationsAction = createAsyncThunk(
    "recommendations/fetch",
    async (url, thunkOptions) => {
        const { dispatch } = thunkOptions;
        dispatch(toggleLoadingAction(true));
        const res = await fetch(url);
        const jsonRes = await res.json();
        dispatch(getRecommendationsAction(jsonRes.results));
        dispatch(toggleLoadingAction(false));
    }
);

export { getMoviesAction, fetchGenresAction, setActiveTabAction, getGenresAction, fetchVideoesAction, fetchRecommendationsAction, fetchImagesAction, fetchMovieAction, fetchCastsMovieAction, fetchCardMovieListAction, toggleLoadingAction, handleCardGroupActiveTabAction };