import { Todo } from "./types";

export default function CompletedTodos({ completedTodos }: { completedTodos: Todo[] }) {
    return (
        <>
            <h2>Completed</h2>
            <CompletedTodosList completedTodos={completedTodos} />
        </>
    );
}

function CompletedTodosList({ completedTodos }: { completedTodos: Todo[] }) {
    return (
        <ul>
            {completedTodos.map(todo => {
                return (
                    <li key={todo.id}>
                        <label style={{textDecoration: 'line-through'}}>
                            {todo.description}{' '}
                        <input type="checkbox" disabled={true} checked={todo.completed} />
                        </label>
                    </li>

                );
            })}
        </ul>
    );
}