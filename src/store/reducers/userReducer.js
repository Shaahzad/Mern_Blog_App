import { createSlice } from "@reduxjs/toolkit";


const userinitialState = {userinfo: null}


const userSlice = createSlice({
    name: "count",
    initialState: userinitialState,
    reducers:{
    setUserInfo(state, action){
        state.userinfo = action.payload
    }
    }
})


const userAction = userSlice.actions
const userReducer = userSlice.reducer

export {userAction, userReducer}