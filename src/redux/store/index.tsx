import {configureStore, combineReducers} from "@reduxjs/toolkit";
import coursesSlice from "./reducers/courses/courses";

const store = configureStore({
    reducer:{
        coursesSlice: coursesSlice
    }
})

export type RootReducer = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store