import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
    name:"userInfo",
    initialState:{
        data:{name:""}
    },
    reducers:{
        loginUser:(state, action)=>{
            state.data = action.payload
        },
        logoutUser:(state, action)=>{
            state.data = {name:""}
        }
    }
})
export const {loginUser, logoutUser} = userSlice.actions;
export default userSlice.reducer;