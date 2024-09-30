import { createSlice } from "@reduxjs/toolkit";
const isAuthSlice=createSlice({
    name: 'Auth',
    initialState: {
        isAuth:false
    },
    reducers: {
        toEnterAuth(state){
            state.isAuth=true
        },
        toExitAuth(state){
            state.isAuth=false

        }
    }
})

export const {toEnterAuth,toExitAuth} = isAuthSlice.actions
export default isAuthSlice.reducer