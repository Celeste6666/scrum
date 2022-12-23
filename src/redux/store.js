import { combineReducers, configureStore } from "@reduxjs/toolkit";
import burgerSlice from "./burgerSlice";

const reducer = combineReducers({
  burgerSlice
})

const store = configureStore({
  reducer,
})

export default store;