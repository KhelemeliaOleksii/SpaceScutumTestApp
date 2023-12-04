import { createSlice } from "@reduxjs/toolkit";
import {
    getAllTodos,
    getTodo,
    updateTodo,
    deleteTodo,
    addTodo,
} from "./todos-operations";
import { todoImport } from "src/types/todos-type";

type stateType = {
    page: number;
    perPage: number;
    todo: todoImport | null,
    todos: todoImport[];
    isPending: boolean;
    error: string | null;
}


const initialState: stateType = {
    page: 1,
    perPage: 5,
    todo: null,
    todos: [],
    isPending: false,
    error: null
}

const todosSlide = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // getAllTodos
            .addCase(getAllTodos.pending, (state: stateType) => {
                state.isPending = true;
                state.error = null;
            })
            .addCase(getAllTodos.rejected, (state: stateType, { error }) => {
                state.isPending = false;
                state.error = error.message || "Something went wrong!"
            })
            .addCase(getAllTodos.fulfilled, (state: stateType, { payload }: { payload: todoImport[] }) => {
                state.isPending = false;
                state.error = null;
                state.todos = payload;
            })
            // getTodo by id
            .addCase(getTodo.pending, (state: stateType) => {
                state.isPending = true;
                state.error = null;
            })
            .addCase(getTodo.rejected, (state: stateType, { error }) => {
                state.isPending = false;
                state.error = error.message || "Something went wrong!"
            })
            .addCase(getTodo.fulfilled, (state: stateType, { payload }: { payload: todoImport }) => {
                state.isPending = false;
                state.error = null;
                state.todo = payload;
            })
            //addTodo
            .addCase(addTodo.pending, (state: stateType) => {
                state.isPending = true;
                state.error = null;
            })
            .addCase(addTodo.rejected, (state: stateType, { error }) => {
                state.isPending = false;
                state.error = error.message || "Something went wrong!"
            })
            .addCase(addTodo.fulfilled, (state: stateType, { payload }: { payload: todoImport }) => {
                state.isPending = false;
                state.error = null;
                state.todo = payload;
                state.todos = [...state.todos, payload]
            })
            //updateTodo
            .addCase(updateTodo.pending, (state: stateType) => {
                state.isPending = true;
                state.error = null;
            })
            .addCase(updateTodo.rejected, (state: stateType, { error }) => {
                state.isPending = false;
                state.error = error.message || "Something went wrong!"
            })
            .addCase(updateTodo.fulfilled, (state: stateType, { payload }: { payload: todoImport }) => {
                state.isPending = false;
                state.error = null;
                state.todo = payload;
                state.todos[payload.id] = payload;
            })
            //deleteTodo 
            .addCase(deleteTodo.pending, (state: stateType) => {
                state.isPending = true;
                state.error = null;
            })
            .addCase(deleteTodo.rejected, (state: stateType, { error }) => {
                state.isPending = false;
                state.error = error.message || "Something went wrong!";
            })
            .addCase(deleteTodo.fulfilled, (state: stateType, action) => {
                state.isPending = false;
                state.error = null;
                state.todo = null;
                state.todos = state.todos.filter(item => item.id !== action.payload);
            })
    }
})