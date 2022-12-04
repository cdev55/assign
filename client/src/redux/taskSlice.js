import { createSlice } from '@reduxjs/toolkit';
const arr=[]
const taskSlice = createSlice({
    name: "addtask",    
    initialState:[],    
    reducers: {setTask: (state) => {state=[...state,[]]}}

});

export const { setTask } = taskSlice.actions;
export default taskSlice.reducer;