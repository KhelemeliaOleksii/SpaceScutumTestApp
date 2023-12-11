import { createSelector } from "@reduxjs/toolkit";
import { stateTodosType } from "./todos-types";
import { todo, todoImport } from "src/types/todos-type";

export const getAllTodos = (state: stateTodosType) => state.todos;

export const getPageNumber = (state: stateTodosType) => state.page;

export const getTodosNumberPerPage = (state: stateTodosType) => state.perPage;

export const getCurrentTodo = (state: stateTodosType) => state.currentTodo;

export const getTodosToShowClientPagination = createSelector([getAllTodos, getPageNumber, getTodosNumberPerPage], (todos, page, perPage) =>
    configureTodosListToShow(todos, page, perPage))

type TodosPerPageClientPagination = {
    isPageFirst: boolean;
    isPageLast: boolean;
    todos: todo[];
} | null;

export const configureTodosListToShow = (todos: todoImport[], page: number, perPage: number): TodosPerPageClientPagination => {
    const todosAmount = todos.length;

    const pagesAmount = Math.ceil(todosAmount / perPage);
    //invalid value for number of a page
    if (page <= 0 || page > pagesAmount) {
        console.warn('Invalid page value!');
        return null;
    }
    //invalid value for number of items per page
    if (perPage <= 0) {
        console.warn('Invalid value items per page');
        return null;
    }

    const isPageFirst = (pagesAmount === 1);
    const isPageLast = (page === (pagesAmount - 1));
    return {
        isPageFirst,
        isPageLast,
        todos: todos.slice((page - 1) * perPage, (page * perPage) + 1),
    }
}