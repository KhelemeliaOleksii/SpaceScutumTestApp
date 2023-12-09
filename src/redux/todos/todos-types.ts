import { todoImport } from "src/types/todos-type";

export type stateTodosType = {
    page: number;
    perPage: number;
    currentTodo: todoImport | null,
    todos: todoImport[];
}