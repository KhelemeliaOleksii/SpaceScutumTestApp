import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { todo, todoImport } from 'src/types/todos-type';



export const getAllTodos = createAsyncThunk('todos/get', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('todos');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const getTodo = createAsyncThunk('todo/get', async (credentials: number, thunkAPI) => {
    try {
        const { data } = await axios.get(`todos/${credentials}`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const addTodo = createAsyncThunk('todo/add', async (credentials: todo, thunkAPI) => {
    try {
        const { data } = await axios.post('todos', credentials);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const deleteTodo = createAsyncThunk('todo/delete', async (credentials: number, thunkAPI) => {
    try {
        await axios.delete(`todos/${credentials}`,);
        return credentials;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const updateTodo = createAsyncThunk('todo/update', async (credentials: todoImport, thunkAPI) => {
    try {
        const { data } = await axios.put(`todos/${credentials.id}`, credentials);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})


