import { createSlice } from "@reduxjs/toolkit";
const isAuthSlice=createSlice({
    name: 'Auth',
    initialState: {
        isAuth:false,
        isAuthName:''
    },
    reducers: {
        toEnterAuth(state, action){
            state.isAuth=true;
            state.isAuthName=action.payload.username;
        },
        toExitAuth(state){
            state.isAuth=false;
            state.isAuthName='';
        }
    }
})

export const {toEnterAuth,toExitAuth} = isAuthSlice.actions
export default isAuthSlice.reducer