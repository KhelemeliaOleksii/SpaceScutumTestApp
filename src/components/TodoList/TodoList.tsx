import { useSelector } from "react-redux";
import { getTodosToShowClientPagination } from "src/redux/todos/todos-selectors";

export const TodoList = () => {
    const itemsToShow = useSelector(getTodosToShowClientPagination);
    const isItemsListExist = !!itemsToShow && !!itemsToShow.todos;
    console.log(itemsToShow);

    return (
        <>
            {
                isItemsListExist ?
                    <ul>
                        <li>jkhkjh</li>
                    </ul>
                    : <p>The list is empty</p>
            }
        </>
    )
};

