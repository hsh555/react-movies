import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getBackdropsAction,
    getCastsMovieAction,
    getMovieAction,
    getPopularMoviesAction,
    getPostersAction,
    getRecommendationsAction,
    getSearchMoviesAction,
    getSearchTrendsAction,
    getTopRatedMoviesAction,
    getTotalResultsAction,
    getUpcomingMoviesAction,
    getVideoesAction,
    setTotalPagesAction,
    toggleLoadingAction,
    toggleTabLoadingAction
} from "./actions";

const FetchSearchMoviesAction = createAsyncThunk(
    "search/fetch",
    async (url, thunkOptions) => {
        const { dispatch } = thunkOptions;
        dispatch(toggleLoadingAction(true));
        try {
            const res = await fetch(url);
            const jsonRes = await res.json();
            dispatch(getTotalResultsAction(jsonRes.total_results));
            dispatch(setTotalPagesAction(jsonRes.total_pages));
            dispatch(getSearchMoviesAction(jsonRes.results));
        } catch (error) {
            console.log('some error');
        } finally {
            dispatch(toggleLoadingAction(false));
        }
    }
);


const fetchSearchTrends = createAsyncThunk(
    "searchTrends/fetch",
    async (url, thunkOptions) => {
        const { dispatch } = thunkOptions;
        dispatch(toggleLoadingAction(true));
        try {
            const res = await fetch(url);
            const jsonRes = await res.json();
            dispatch(getSearchTrendsAction(jsonRes.results));
        } catch (error) {
            console.log("some error");
        } finally {
            dispatch(toggleLoadingAction(false));
        }
    }
);


const fetchVideoesAction = createAsyncThunk(
    "videoes/fetch",
    async (url, thunkOptions) => {
        const { dispatch } = thunkOptions;
        dispatch(toggleTabLoadingAction(true));
        try {
            const res = await fetch(url);
            const jsonRes = await res.json();
            dispatch(getVideoesAction(jsonRes.results));
        } catch (error) {
            console.log("some error");
        } finally {
            dispatch(toggleTabLoadingAction(false));
        }
    }
);

const fetchImagesAction = createAsyncThunk(
    "images/fetch",
    async (url, thunkOptions) => {
        const { dispatch } = thunkOptions;
        dispatch(toggleTabLoadingAction(true));
        try {
            const res = await fetch(url);
            const jsonRes = await res.json();
            dispatch(getPostersAction(jsonRes.posters));
            dispatch(getBackdropsAction(jsonRes.backdrops));
        } catch (error) {
            console.log("some error");
        } finally {
            dispatch(toggleTabLoadingAction(false));
        }
    }
);

const fetchCardMovieListAction = createAsyncThunk(
    "moviesList/fetch",
    async (info, thunkOptions) => {
        const { dispatch } = thunkOptions;
        const [url, title] = info.split(",");
        dispatch(toggleLoadingAction(true));
        try {
            const res = await fetch(url);
            const jsonRes = await res.json();
            dispatch(setTotalPagesAction(jsonRes.total_pages));
            if (title === "popular") {
                dispatch(getPopularMoviesAction(jsonRes.results));
            } else if (title === "top_rated") {
                dispatch(getTopRatedMoviesAction(jsonRes.results));
            } else if (title === "upcoming") {
                dispatch(getUpcomingMoviesAction(jsonRes.results));
            }
        } catch (error) {
            console.log("some error");
        } finally {
            dispatch(toggleLoadingAction(false));
        }
    }
);

const fetchMovieAction = createAsyncThunk(
    "movie/fetch",
    async (url, thunkOptions) => {
        const { dispatch } = thunkOptions;
        dispatch(toggleLoadingAction(true));
        try {
            const res = await fetch(url);
            const jsonRes = await res.json();
            dispatch(getMovieAction(jsonRes));
        } catch (error) {
            console.log("some error");
        } finally {
            dispatch(toggleLoadingAction(false));
        }
    }
);

const fetchCastsMovieAction = createAsyncThunk(
    "castsMovie/fetch",
    async (url, thunkOptions) => {
        const { dispatch } = thunkOptions;
        dispatch(toggleLoadingAction(true));
        try {
            const res = await fetch(url);
            const jsonRes = await res.json();
            dispatch(getCastsMovieAction(jsonRes.cast));
        } catch (error) {
            console.log("some error");
        } finally {
            dispatch(toggleLoadingAction(false));
        }
    }
);

const fetchRecommendationsAction = createAsyncThunk(
    "recommendations/fetch",
    async (url, thunkOptions) => {
        const { dispatch } = thunkOptions;
        dispatch(toggleLoadingAction(true));
        try {
            const res = await fetch(url);
            const jsonRes = await res.json();
            dispatch(getRecommendationsAction(jsonRes.results));
        } catch (error) {
            console.log("some error");
        } finally {
            dispatch(toggleLoadingAction(false));
        }
    }
);

export {
    FetchSearchMoviesAction,
    fetchSearchTrends,
    fetchVideoesAction,
    fetchRecommendationsAction,
    fetchImagesAction,
    fetchMovieAction,
    fetchCastsMovieAction,
    fetchCardMovieListAction,
};