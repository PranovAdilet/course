import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Course, CoursesAsync, coursesSlice, getAllCourse} from "../courses/courses";
import axios from "axios";


export interface Group {
    name: string
    mentor: number
    support: number
    personName: []
    id: number
}

export interface GroupAsync {
    status: "loading"| "error" | "done" | null
    error : string | null,
    data: Group[]
}

const initialState:GroupAsync = {
    status: null,
    error: null,
    data: []
}

export const getMyGroups = createAsyncThunk(
    "myGroupsSlice/getMyGroups",
    async (user, {rejectWithValue}) => {
        try {
            const response = await axios(` http://localhost:8080/groups?personName_like=${user}&mentor=${user}&support=${user}`)
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



const myGroups = createSlice({
    name: "myGroups",
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(getMyGroups.pending, (state) => {
            state.status = "loading"
            state.error = null
        })
        builder.addCase(getMyGroups.rejected, (state, {payload}) => {
            state.status = "error"
            state.error = `${payload}`
        })
        builder.addCase(getMyGroups.fulfilled, (state, {payload}) => {
            state.status = "done"
            state.error = null
            state.data = payload
        })
    }
})

export const {} = myGroups.actions

export default myGroups.reducer