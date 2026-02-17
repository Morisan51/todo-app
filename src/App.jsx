import { useTodos } from './hooks/useTodos'
import { TodoInput } from './components/TodoInput.jsx'
import { TodoList } from './components/TodoList.jsx'
import './App.css'

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos()

  return (
    <div className="app">
      <h1>TODOアプリ</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  )
}

export default App
