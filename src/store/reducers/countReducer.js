import { createSlice } from "@reduxjs/toolkit";


const countinitialState = {number : 0}


const countSlice = createSlice({
    name: "count",
    initialState: countinitialState,
    reducers:{
        countChange(state,action){
            state.number = action.payload
        }
    }
})


const countAction = countSlice.actions
const countReducer = countSlice.reducer

export {countAction,countReducer}