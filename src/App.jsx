import { NewTodoForm } from "./NewTodoForm"
import TodoList from "./TodoList"
import "./styles.css"
import { useState } from "react"


export default function App() {
  const [todos, setTodos] = useState([])

  function addTodo(title) {
    setTodos(currentTodos => {

      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false }
      ]
    })
  }


  function toggleTodo(id, completed) {
    console.log("nothing")
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          console.log("same id")
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter((todo) => todo.id !== id)
    })
  }


  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} />


    </>
  )
}