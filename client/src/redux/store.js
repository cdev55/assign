import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './taskSlice'

const store = configureStore({
    reducer: taskReducer
});

export default store;