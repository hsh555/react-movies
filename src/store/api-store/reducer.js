import { createReducer } from "@reduxjs/toolkit";
import ACTION_TYPES from "./action-types";
import apiInitialState from "./state";


const apiReducer = createReducer(apiInitialState, {
    [ACTION_TYPES.GET_MOVIES]: (state, action) => {
        return {
            ...state,
            movies: action.payload
        };
    },

    [ACTION_TYPES.GET_POPULAR_MOVIES]: (state, action) => {
        return {
            ...state,
            popularMovies: action.payload
        };
    },
    [ACTION_TYPES.GET_TOP_RATED_MOVIES]: (state, action) => {
        return {
            ...state,
            topRatedMovies: action.payload
        };
    },
    [ACTION_TYPES.GET_UPCOMING_MOVIES]: (state, action) => {
        return {
            ...state,
            upcomingMovies: action.payload
        };
    },
    [ACTION_TYPES.TOGGLE_LOADING]: (state, action) => {
        return {
            ...state,
            isLoading: action.payload
        };
    },
    [ACTION_TYPES.TOGGLE_TAB_LOADING]: (state, action) => {
        return {
            ...state,
            tabLoading: action.payload
        };
    },
    [ACTION_TYPES.GET_MOVIE]: (state, action) => {
        return {
            ...state,
            movie: action.payload
        };
    },

    [ACTION_TYPES.GET_CASTS_MOVIE]: (state, action) => {
        return {
            ...state,
            castsMovie: action.payload
        };
    },
    [ACTION_TYPES.GET_RECOMMENDATIONS]: (state, action) => {
        return {
            ...state,
            recommendations: action.payload
        };
    },
    [ACTION_TYPES.GET_POSTERS]: (state, action) => {
        return {
            ...state,
            posters: action.payload
        };
    },
    [ACTION_TYPES.GET_BACKDROPS]: (state, action) => {
        return {
            ...state,
            backdrops: action.payload
        };
    },
    [ACTION_TYPES.GET_VIDEOES]: (state, action) => {
        return {
            ...state,
            videoes: action.payload
        };
    },
    [ACTION_TYPES.SET_ACTIVE_TAB]: (state, action) => {
        return {
            ...state,
            activeTab: action.payload
        };
    },
    [ACTION_TYPES.GET_GENRES]: (state, action) => {
        return {
            ...state,
            genres: action.payload
        };
    },
    [ACTION_TYPES.SET_TOTAL_PAGES]: (state, action) => {
        return {
            ...state,
            totalPages: action.payload
        };
    },
});

export default apiReducer;