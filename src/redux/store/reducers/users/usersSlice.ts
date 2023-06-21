import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../../../interface/app.interface";
import axios from "axios";

export interface IUsersSlice{
    data: IUser[] | []
    role: "all" | "Student" | "Support" | "Mentor"
    status: "loading" | "error" | "done" | null
    error: string | null

}

export const getAllUsers = createAsyncThunk(
    "users/getAllUsers",
    async () => {
        try {
            const response = await axios(`http://localhost:8080/users`)
            if (response.statusText !== "OK"){
                throw new Error("Ошибка при запросе данных")
            }
            return response.data
        }catch (err){
            if (err instanceof Error){
                console.log(err.message)
            }else {
                console.log('Unexpected error', err)
            }
        }
})

const initialState: IUsersSlice = {
    data: [],
    role: "all",
    status: null,
    error: null
}



const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.status = "loading"
                state.error = null

            })
            .addCase(getAllUsers.rejected, (state, action) =>{
                state.status = "error"
                state.error = action.payload as string
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
    }
})


export default usersSlice.reducer