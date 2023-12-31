import {RootReducer} from "../store";
import {createSelector} from "@reduxjs/toolkit";

export const selectUsers = (state: RootReducer) => state.usersSlice
export const selectGroup = (state: RootReducer) => state.groupSlice
export const selectProfile = (state: RootReducer) => state.profileSlice

export const selectUsersMentors = createSelector(selectUsers, (state) => state.data.filter((item) => item.role === "Mentor" ))
export const selectUsersStudents = createSelector(selectUsers, (state) => state.data.filter((item) => item.role === "Student" )
    .map((item) => {
        return {
            label: `${item.name} ${item.surname}`,
            value: item.id
        }
    }))
export const selectUsersSupports = createSelector(selectUsers, (state) => state.data.filter((item) => item.role === "Support" ))

export const selectCourse = (state: RootReducer) => state.coursesSlice

export const selectUser = (state: RootReducer) => state.userSlice
