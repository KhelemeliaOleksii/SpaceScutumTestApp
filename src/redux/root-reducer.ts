import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { todosSlide } from "./todos/todos-slice";

const todosPersistConfig = {
    key: "todos",
    storage,
    whitelist: ["page", "perPage", "currentTodo", "todos"]
}

export const rootReducer = persistReducer(todosPersistConfig, todosSlide.reducer);

