import { useState, useEffect } from 'react'

const STORAGE_KEY = 'todos'

export function useTodos() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  })

  // todosが変わるたびにLocalStorageに保存
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  // TODO追加
  function addTodo(text) {
    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    }
    setTodos((prev) => [...prev, newTodo])
  }

  // 完了/未完了の切り替え
  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // TODO削除
  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return { todos, addTodo, toggleTodo, deleteTodo }
}
