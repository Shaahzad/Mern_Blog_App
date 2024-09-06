import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";

const userinfofromstorage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null

const initialState = {
    user: {userinfo: userinfofromstorage}
}

const store = configureStore({
    reducer: {
        user: userReducer
    }
    ,preloadedState: initialState
})


export default store