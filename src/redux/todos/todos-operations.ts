import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { todo, todoImport } from 'src/types/todos-type';



export const getAllTodos = createAsyncThunk('todos/get', async () => {
    try {
        const { data } = await axios.get('todos');
        return data;
    } catch (error) {
        return error;
    }
})

export const getTodo = createAsyncThunk('todo/get', async (credentials: number) => {
    try {
        const { data } = await axios.get(`todos/${credentials}`);
        return data;
    } catch (error) {
        return error;
    }
})

export const addTodo = createAsyncThunk('todo/add', async (credentials: todo) => {
    try {
        const { data } = await axios.post('todos', credentials);
        return data;
    } catch (error) {
        return error;
    }
})

export const deleteTodo = createAsyncThunk('todo/delete', async (credentials: number) => {
    try {
        await axios.delete(`todos/${credentials}`,);
        return credentials;
    } catch (error) {
        return error;
    }
})

export const updateTodo = createAsyncThunk('todo/update', async (credentials: todoImport) => {
    try {
        const { data } = await axios.put(`todos/${credentials.id}`, credentials);
        return data;
    } catch (error) {
        return error;
    }
})


