import { createAction } from "@reduxjs/toolkit";
import ACTION_TYPES from "./action-types";

const showMsgAction = createAction(ACTION_TYPES.SHOW_MSG);
const toggleSuccessMsgAction = createAction(ACTION_TYPES.TOGGLE_SUCCESS_MSG);

export { showMsgAction, toggleSuccessMsgAction };