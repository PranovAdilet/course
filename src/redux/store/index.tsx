import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {coursesSlice} from "./reducers/courses/courses";
import exp from "constants";



const store = configureStore({
    reducer:{
        coursesSlice: coursesSlice.reducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store