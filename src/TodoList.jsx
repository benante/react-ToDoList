import { TodoItem } from "./TodoItem"
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};


export default function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                return (
                    <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                )
            })}
        </ul>
    )
}