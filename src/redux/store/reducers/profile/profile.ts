import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {loginUser} from "../user/userSlice";
import {IUser} from "../../../../interface/app.interface";

interface IProfileSlice {
    profile:IUser | null
    status: "isLoading" | "isEmpty" | "isConnect" | "isError"
    error:string
}


const initialState:IProfileSlice = {
    profile:null,
    status: "isEmpty",
    error:""
}


export const getUser = createAsyncThunk(
    "profile/getUser",
    async (id: string| undefined, {rejectWithValue}) => {
        try {
            const response = await axios(` http://localhost:8080/users/${id}`)
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

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.status = "isLoading"
                state.error = ""
            })
            .addCase(getUser.rejected,(state, action) => {
                state.status = "isError"
                state.error = action.payload as string
            })
            .addCase(getUser.fulfilled,(state, action) => {
                state.profile = action.payload
                state.status = "isConnect"
            })
    }
})

export default profileSlice.reducer