import { combineReducers, configureStore } from "@reduxjs/toolkit";
import apiReducer from "./api-store/reducer";
// import mainReducer from "./main-store/reducer";
import authReducer from "./auth-store/reducer";

const appReducer = combineReducers({
    apiReducer,
    authReducer
});

const store = configureStore({ reducer: appReducer });

export default store;