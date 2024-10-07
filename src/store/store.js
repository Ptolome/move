import { configureStore } from "@reduxjs/toolkit";
import toAuthReducer from './slices/ToAuthSlice'
import { moveApi } from "./moveAPI";

export default configureStore({
  reducer: {
    toAuth: toAuthReducer,
    [moveApi.reducerPath]:moveApi.reducer,
  },
    middleware:(getDefaultMiddleWare)=>getDefaultMiddleWare().concat(moveApi.middleware)
 
})