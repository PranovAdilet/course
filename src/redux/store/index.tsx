import {configureStore, combineReducers} from "@reduxjs/toolkit";
import coursesSlice from "./reducers/courses/courses";
import userSlice from "./reducers/user/userSlice";
import usersSlice from "./reducers/users/usersSlice";
import groupSlice from "./reducers/group/group"
import profileSlice from "./reducers/profile/profile"
import {rememberEnhancer, rememberReducer} from "redux-remember";


const rememberedKeys = [ 'coursesSlice', 'user', 'users', "group", "profile"];

const rootReducer = combineReducers({
    coursesSlice: coursesSlice,
    userSlice: userSlice,
    usersSlice: usersSlice,
    groupSlice: groupSlice,
    profileSlice: profileSlice
})

const reducer = rememberReducer(rootReducer)

const store = configureStore({
    reducer: reducer,
    enhancers: [rememberEnhancer(
        window.localStorage,
        rememberedKeys,
        {persistWholeStore: true}
    )]

})

export type RootReducer = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store