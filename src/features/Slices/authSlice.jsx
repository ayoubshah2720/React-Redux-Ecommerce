import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:'user',
    initialState: JSON.parse(sessionStorage.getItem('authUser') ) || {
        name:"",
        password: "",
        image: "",
        authUser: false,
    },
    reducers: {
        login(state, action){
            const user = action.payload;
            const usernameValidation = /^[a-z][^\W_]{7,14}$/i.test(user.name)
            const passwordValidation = /^(?=[^a-z]*[a-z])(?=\D*\d)[^:&.~\s]{5,20}$/.test(user.password)
            state.user = user 
            if(!usernameValidation || !passwordValidation) {
                state.user.authUser = false;
            } else {
                state.user.authUser = true;
                const saveUser = JSON.stringify(user);
                sessionStorage.setItem('authUser',saveUser) 
                
            }

        },
        logout(state){
            state.user = {
                name: "",
                password: "",
                image: "",
                authUser: false,
            };
            sessionStorage.clear();
        }
    }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer;