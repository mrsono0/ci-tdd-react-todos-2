import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp_kimjeonghoonn = () => {
    return (<div>
        <TodoForm />
        <TodoList todos={[]}/>
    </div>);
};
export default TodoApp_kimjeonghoonn;