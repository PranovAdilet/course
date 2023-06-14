import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {v4 as uuidv4} from 'uuid'


export interface Course {
    id: string | number
    title : string,
    students: string
}
export interface CoursesAsync {
    status: "loading"| "error" | "done" | null
    error : string | null,
    data: Course[],
    limit: number | string
}

export const createGroup = createAsyncThunk(
    'coursesSlice/createGroup',
    async (title:string , rejectedWithValue) => {
        try {
            let newGroup: Course = {
                id: uuidv4(),
                title: title,
                students: ""
            }

            const response = await axios.post(` http://localhost:8080/groups`, newGroup)

            if (response.statusText !== "Created"){
                throw new Error('Ошибка при запросе данных')
            }
            return response.data
        }catch (err) {
            if (err instanceof Error){
                console.log(err.message)
            }else {
                console.log('Unexpected error', err)
            }
        }
    }
)

export const getAllCourse = createAsyncThunk(
    'coursesSlice/getAllCourse',
    async (_ , rejectedWithValue) => {
        try {
            const response = await axios(` http://localhost:8080/groups?_limit=${initialState.limit}`)
            if (response.statusText !== "OK"){
                throw new Error('Ошибка при запросе данных')
            }
            return response.data
        }catch (err) {
           if (err instanceof Error){
               console.log(err.message)
           }else {
               console.log('Unexpected error', err)
           }
        }
    }
)



const initialState:CoursesAsync = {
    status: null,
    error: null,
    data: [],
    limit: 4
}


export const coursesSlice = createSlice({
    name: "coursesSlice",
    initialState,
    reducers:{
        limitCourse: (state, action) => {
            state.limit = 2

        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllCourse.pending, (state, action: PayloadAction) => {
            state.status = "loading"
            state.error = null
        })
        builder.addCase(getAllCourse.rejected, (state, {payload}) => {
            state.status = "error"
            state.error = `${payload}`
        })
        builder.addCase(getAllCourse.fulfilled, (state, {payload}) => {
            state.status = "done"
            state.error = null
            state.data = payload
        })
        builder.addCase(createGroup.pending, (state) => {
            state.status = "loading"
            state.error = null
        })
        builder.addCase(createGroup.rejected, (state, {payload}) => {
            state.status = "error"
            state.error = `${payload}`
        })
        builder.addCase(createGroup.fulfilled, (state, action) => {
            state.status = "done"
            state.error = null
            state.data = [...state.data, action.payload]
        })
    }
})




export const {limitCourse} = coursesSlice.actions

export default coursesSlice.reducer