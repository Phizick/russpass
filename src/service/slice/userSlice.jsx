import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
        const response = await fetch('https://api.allorigins.win/get?url=http://46.243.143.123:8010/user/646f5292e0f96fc203cb75c2');
        return await response.json();
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                action.error = undefined;
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;