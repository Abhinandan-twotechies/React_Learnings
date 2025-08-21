import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../Features/Users/userSlice";

const rootReducer = combineReducers({
  users: userReducer,
});

export default rootReducer;
