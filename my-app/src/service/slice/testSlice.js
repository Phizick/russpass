import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
  pending: false,
  error: "",
};

export const testThunk = createAsyncThunk("users", () =>
  fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
    data.json()
  )
);

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducer: {},
  extraReducers: {
    [testThunk.pending]: (state) => {
      state.pending = true;
    },
    [testThunk.fulfilled]: (state, action) => {
      state.users = [...action.payload];
      state.pending = false;
    },
    [testThunk.enjected]: (state) => {
      state.error = `Ошибка`;
    },
  },
});
