import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { loginUser} from "../user/userSlice";
import {ICourse, ICourseGroup} from "../../../../interface/app.interface";
import {Course} from "../courses/courses";

interface IGroup {
    group: ICourse | null
    status: "isLoading" | "isEmpty" | "isConnect" | "isError"
    error:string
}

const initialState: IGroup = {
    group:null,
    status: "isEmpty",
    error:""
}

export interface IDeleteUser{
    group: ICourse | null,
    id: number | string | undefined
}



export const getGroup = createAsyncThunk(
    "group/getGroup",
    async (id: string| undefined, {rejectWithValue}) => {
        try {
            const response = await axios(` http://localhost:8080/groups/${id}`)
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

export const deleteUser = createAsyncThunk<Course, IDeleteUser >(
    "group/deleteUser",
    async ({group, id}, {rejectWithValue}) => {
        try {
            const response = await axios.patch(` http://localhost:8080/groups/${group!.id}`,{
            ...group,
                personName: group!.personName.filter((item: number) => item !== id)
            })
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


const groupSlice = createSlice({
    name: "group",
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
            .addCase(getGroup.pending, (state) => {
                state.status = "isLoading"
                state.error = ""
            })
            .addCase(getGroup.rejected,(state, action) => {
                state.status = "isError"
                state.error = action.payload as string
            })
            .addCase(getGroup.fulfilled,(state, action) => {
                state.group = action.payload
                state.status = "isConnect"
            })

    }
})

export default groupSlice.reducer
