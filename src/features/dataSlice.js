import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk để gọi API
export const fetchData = createAsyncThunk(
    'datagg/fetchData',
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        return response.data;
    }
);

export const fetchDataComment = createAsyncThunk(
    'comments/fetchData',
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        return response.data;
    }
);

const dataSlice = createSlice({
    name: 'datacc',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

const dataCommentSlice = createSlice({
    name: 'comentData',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataComment.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDataComment.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchDataComment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const dataCommentReducer = dataCommentSlice.reducer;
const dataReducer = dataSlice.reducer;

export default dataReducer;

