import {createSlice, nanoid} from '@reduxjs/toolkit';

// create Initial State
const initialState = {
    todos:[{
        id: 1,
        text: 'Learn Redux Toolkit by Chai aur Code(Himesh Chaudhary)'
    }]
}

// Create Slice

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        
    }
});

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;