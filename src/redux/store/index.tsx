import {configureStore} from "@reduxjs/toolkit";
import coursesSlice from "./reducers/courses/courses";
import userSlice from "./reducers/user/userSlice";
const store = configureStore({
    reducer:{
        coursesSlice: coursesSlice,
        userSlice: userSlice
    }
})

export type RootReducer = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store