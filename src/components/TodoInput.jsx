import { useState } from 'react'

export function TodoInput({ onAdd }) {
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (text.trim() === '') return
    onAdd(text.trim())
    setText('')
  }

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="TODOを入力してください"
      />
      <button type="submit">追加</button>
    </form>
  )
}
