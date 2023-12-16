import { Dispatch, SetStateAction } from "react";
import { Todo } from "./types";

export default function NewTodos(
    { 
        newTodos, 
        completedTodos,
        setUncompletedTodos, 
        setCompletedTodos 
    }: 
    {
        newTodos: Todo[],
        completedTodos: Todo[],
        setUncompletedTodos: Dispatch<SetStateAction<Todo[]>>, 
        setCompletedTodos: Dispatch<SetStateAction<Todo[]>> 
    }) {
    return (
        <>
            <h2>New</h2>
            <NewTodosList 
                newTodos={newTodos}
                completedTodos={completedTodos}
                setUncompletedTodos={setUncompletedTodos}
                setCompletedTodos={setCompletedTodos}
            />
        </>
    );
}

function NewTodosList(
    { 
        newTodos,
        completedTodos,
        setUncompletedTodos, 
        setCompletedTodos 
    }: 
    {
        newTodos: Todo[],
        completedTodos: Todo[],
        setUncompletedTodos: Dispatch<SetStateAction<Todo[]>>, 
        setCompletedTodos: Dispatch<SetStateAction<Todo[]>> 
    }) {

    function handleRemoveCompletedTodo(id:number) {
        setUncompletedTodos(newTodos.filter(nt => id !== nt.id));
    }

    function handleAddNewCompletedTodo(todo: Todo) {
        todo.completed = true;
        setCompletedTodos([todo, ...completedTodos]);
    }
    return (
        <ul>
            {newTodos.map(todo => {
                return (
                    <li key={todo.id}>
                        <label>
                            {todo.description}{' '}
                            <input 
                                type="checkbox" 
                                onClick={() => {
                                    handleRemoveCompletedTodo(todo.id);
                                    handleAddNewCompletedTodo(todo);
                                }}
                            />
                        </label>
                    </li>);
                    }
                )
            }
        </ul>
    )
}