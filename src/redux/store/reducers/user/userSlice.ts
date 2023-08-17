import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import {ILoginFields, IUser} from "../../../../interface/app.interface";
import axios from "axios";
import {Course} from "../courses/courses";


interface IUserSlice {
    user:IUser | null
    status: "isLoading" | "isEmpty" | "isConnect" | "isError"
    error:string
}






export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (data:ILoginFields,{rejectWithValue} ) => {
        try {
            const res = await axios.post("http://localhost:8080/login",data)

            if(res.status !== 200 ){
                throw new Error('Ошибка при входе')
            }
            return res.data.user
        }
        catch (err) {
            if (err instanceof Error){
                console.log(err.message)
                return rejectWithValue(err.message)
            }else {
                console.log('Unexpected error', err)
                return rejectWithValue("Unexpected error")
            }
        }
    }
)


const initialState:IUserSlice = {
    user:null,
    status: "isEmpty",
    error:""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = "isLoading"
                state.error = ""
            })
            .addCase(loginUser.rejected,(state, action) => {
                state.status = "isError"
                state.error = action.payload as string
            })
            .addCase(loginUser.fulfilled,(state, action) => {
                state.user = action.payload
                state.status = "isConnect"
            })

    }
})

export default userSlice.reducer