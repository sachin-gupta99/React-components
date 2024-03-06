import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    name: "",
    email: "",
    mode: "light"
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialValue,
    reducers: {
        setMode: (state) => {
            state.mode = (state.mode === "light")? "dark": "light";
        },
        setName: (state, action) => {
            state.name = action.payload.name;
        },
        setEmail: (state, action) => {
            state.email = action.payload.email;
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice.reducer;