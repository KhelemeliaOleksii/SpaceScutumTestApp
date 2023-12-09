import { stateTodosType } from "./todos-types";
import { todo } from "src/types/todos-type";

export const getAllTodos = (state: stateTodosType) => state.todos;

type TodosPerPageClientPagination = {
    isPageFirst: boolean;
    isPageLast: boolean;
    todos: todo[];
} | null;

export const getTodosPerPageClientPagination = (state: stateTodosType, page: number, perPage: number): TodosPerPageClientPagination => {
    const todosAmount = state.todos.length;
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
        todos: state.todos.slice((page - 1) * perPage, (page * perPage) + 1),
    }
}