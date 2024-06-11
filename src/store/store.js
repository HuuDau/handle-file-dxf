import { configureStore } from '@reduxjs/toolkit';
import dataReducer, { dataCommentReducer } from 'features/dataSlice';


const store = configureStore({
    reducer: {
        datakeke: dataReducer,
        commentData: dataCommentReducer
    }
});

export default store;