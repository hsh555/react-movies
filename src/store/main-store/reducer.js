import { createReducer } from "@reduxjs/toolkit";
import ACTION_TYPES from "./action-types";
import mainIntialState from "./state";

const mainReducer = createReducer(mainIntialState, {
    [ACTION_TYPES.SHOW_MSG]: (state, action) => {
        return {
            ...state,
            showMsg: action.payload
        }
    },
    [ACTION_TYPES.TOGGLE_SUCCESS_MSG]: (state, action) => {
        return {
            ...state,
            successMsg: action.payload
        }
    }
});

export default mainReducer;