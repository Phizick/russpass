import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from '../store/store'

interface AuthState {
    username: string;
    password: string;
    modalActive: boolean;
    userId: string;
}

const initialState: AuthState = {
    username: "",
    password: "",
    modalActive: true,
    userId: ''
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUsername(state, action: PayloadAction<string>) {
            state.username = action.payload;
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
        },
        setModalActive(state, action: PayloadAction<boolean>) {
            state.modalActive = action.payload;
        },
        createUserSuccess(state, action: PayloadAction<string>) {
            state.userId = action.payload;
        }
    }
});

export const { setUsername, setPassword, setModalActive, createUserSuccess } = authSlice.actions;
export const selectUserId = (state: RootState) => state.auth.userId;

export default authSlice.reducer;