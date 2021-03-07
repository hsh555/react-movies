import { createReducer } from "@reduxjs/toolkit";
import { authModalActiveFormAction, setShowAuthModalAction } from "./actions";
import authInitialState from "./state";

const authReducer = createReducer(authInitialState, {
    [setShowAuthModalAction.type]: (state, action) => {
        return {
            ...state,
            showAuthModal: action.payload.show,
            authModalActiveForm: action.payload.activeForm
        };
    },
    [authModalActiveFormAction.type]: (state, action) => {
        return {
            ...state,
            authModalActiveForm: action.payload
        };
    }
});

export default authReducer;