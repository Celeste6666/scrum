import { combineReducers, configureStore } from "@reduxjs/toolkit";
import burgerSlice from "./burgerSlice";
import sidebarSlice from "./sidebarSlice"

const reducer = combineReducers({
  sidebarSlice,
  burgerSlice,
})

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})

export default store;