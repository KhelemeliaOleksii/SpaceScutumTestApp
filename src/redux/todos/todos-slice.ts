import { createSlice } from "@reduxjs/toolkit";
import {
    getAllTodos,
    getTodo,
    updateTodo,
    deleteTodo,
    addTodo,
} from "./todos-operations";
import { todoImport } from "src/types/todos-type";
import { stateTodosType } from "./todos-types";

type stateTodosOperationsType = stateTodosType & {
    isPending: boolean;
    error: string | null;
}


const initialState: stateTodosOperationsType = {
    page: 1,
    perPage: 5,
    currentTodo: null,
    todos: [],
    isPending: false,
    error: null
}

export const todosSlide = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // getAllTodos
            .addCase(getAllTodos.pending, (state: stateTodosOperationsType) => {
                state.isPending = true;
                state.error = null;
            })
            .addCase(getAllTodos.rejected, (state: stateTodosOperationsType, { error }) => {
                state.isPending = false;
                state.error = error.message || "Something went wrong!"
            })
            .addCase(getAllTodos.fulfilled, (state: stateTodosOperationsType, { payload }: { payload: todoImport[] }) => {
                state.isPending = false;
                state.error = null;
                state.todos = payload;
            })
            // getTodo by id
            .addCase(getTodo.pending, (state: stateTodosOperationsType) => {
                state.isPending = true;
                state.error = null;
            })
            .addCase(getTodo.rejected, (state: stateTodosOperationsType, { error }) => {
                state.isPending = false;
                state.error = error.message || "Something went wrong!"
            })
            .addCase(getTodo.fulfilled, (state: stateTodosOperationsType, { payload }: { payload: todoImport }) => {
                state.isPending = false;
                state.error = null;
                state.currentTodo = payload;
            })
            //addTodo
            .addCase(addTodo.pending, (state: stateTodosOperationsType) => {
                state.isPending = true;
                state.error = null;
            })
            .addCase(addTodo.rejected, (state: stateTodosOperationsType, { error }) => {
                state.isPending = false;
                state.error = error.message || "Something went wrong!"
            })
            .addCase(addTodo.fulfilled, (state: stateTodosOperationsType, { payload }: { payload: todoImport }) => {
                state.isPending = false;
                state.error = null;
                state.currentTodo = payload;
                state.todos = [...state.todos, payload]
            })
            //updateTodo
            .addCase(updateTodo.pending, (state: stateTodosOperationsType) => {
                state.isPending = true;
                state.error = null;
            })
            .addCase(updateTodo.rejected, (state: stateTodosOperationsType, { error }) => {
                state.isPending = false;
                state.error = error.message || "Something went wrong!"
            })
            .addCase(updateTodo.fulfilled, (state: stateTodosOperationsType, { payload }: { payload: todoImport }) => {
                state.isPending = false;
                state.error = null;
                state.currentTodo = payload;
                state.todos[payload.id] = payload;
            })
            //deleteTodo 
            .addCase(deleteTodo.pending, (state: stateTodosOperationsType) => {
                state.isPending = true;
                state.error = null;
            })
            .addCase(deleteTodo.rejected, (state: stateTodosOperationsType, { error }) => {
                state.isPending = false;
                state.error = error.message || "Something went wrong!";
            })
            .addCase(deleteTodo.fulfilled, (state: stateTodosOperationsType, action) => {
                state.isPending = false;
                state.error = null;
                state.currentTodo = null;
                state.todos = state.todos.filter(item => item.id !== action.payload);
            })
    }
})

