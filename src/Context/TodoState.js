import React,{ useReducer }from "react";
import TodosContext from "./TodoContext";
import TodoReducer from './TodoReducer'
const TodoState = (props) => {
    const initialState = {
        todoData: null,
    };
    const [todoState, dispatch] = useReducer(TodoReducer, initialState)
  return <TodosContext.Provider value={[todoState, dispatch]}>{props.children}</TodosContext.Provider>;
};

// value={state}
export default TodoState;
