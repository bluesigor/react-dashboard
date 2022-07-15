import { createContext, useContext, useState } from 'react'

const TodoContext = createContext()

export const TodoContextProdiver = ({ children }) => {
  const uniq_id = Math.random() * 10 + 1
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [isComplete, setIsComplete] = useState(false)

  const addTodo = () => {
    const newTodos = { name: todo, id: uniq_id, complete: isComplete }
    if (newTodos.name !== '') {
      setTodos([newTodos, ...todos])
    }
    return
  }
  const handleComplete = () => {
    setIsComplete(!isComplete)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setTodo('')
  }

  return (
    <TodoContext.Provider
      value={{
        handleSubmit,
        isComplete,
        handleComplete,
        todos,
        todo,
        addTodo,
        setTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export const useTodoContext = () => {
  return useContext(TodoContext)
}
