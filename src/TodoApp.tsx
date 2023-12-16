import { useState } from "react"
import NewTodos from "./NewTodos";
import CompletedTodos from "./CompletedTodos";
import { Todo } from "./types";

export default function TodoApp() {
    // Propagate the setNewTodo method down to the child class as a prop
    const [newTodo, setNewTodo] = useState('');
    const [uncompletedTodos, setUncompletedTodos] = useState<Todo[]>([]);
    const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
    const [counter, setCounter] = useState(0);

    function handleAddNewTodo(newTodo: string) {
        if (newTodo.length != 0) {
            setUncompletedTodos([{ id: counter, description: newTodo, completed: false }, ...uncompletedTodos]);
            setCounter(counter + 1);
        }
    }

    return (
        <>
            <label>
                Add todo:{' '}
                <input
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                />
                {' '}
                <button onClick={() => handleAddNewTodo(newTodo)}>
                    Add
                </button>
            </label>
            <NewTodos
                newTodos={uncompletedTodos}
                completedTodos={completedTodos}
                setUncompletedTodos={setUncompletedTodos}
                setCompletedTodos={setCompletedTodos}
            />
            <CompletedTodos completedTodos={completedTodos} />
        </>
    )
}
