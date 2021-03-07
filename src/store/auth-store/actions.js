import { createAction } from "@reduxjs/toolkit";
import ACTION_TYPES from "./action-types";

const setShowAuthModalAction = createAction(ACTION_TYPES.SET_SHOW_AUTH_MODAL);

const authModalActiveFormAction = createAction(ACTION_TYPES.AUTH_MODAL_ACTIVE_FORM);

export {setShowAuthModalAction, authModalActiveFormAction};