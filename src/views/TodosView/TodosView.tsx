import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllTodos } from "src/redux/todos/todos-operations";
import { TodoList } from "src/components/TodoList";

const TodosView = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch]);

    return (
        <>
            <h1>Todo List</h1>
            <TodoList />
        </>
    )
}

export default TodosView;