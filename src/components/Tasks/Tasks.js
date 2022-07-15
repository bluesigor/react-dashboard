/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from 'react'
import { useTodoContext } from '../../contexts/TodoContext'
import Task from '../Task/Task'
import './style.scss'
const Tasks = () => {
  const {
    todo,
    handleSubmit,

    todos,
    setTodo,
    addTodo,
  } = useTodoContext()
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  }, [todos])
  return (
    <form onSubmit={handleSubmit} className="tasks">
      <header>
        <div className="title">
          <h2> Tasks </h2> <p> Today: </p>{' '}
        </div>{' '}
        <p>
          <a href="#"> View All </a>{' '}
        </p>{' '}
      </header>{' '}
      <ul>
        <li className="input">
          <input
            ref={inputRef}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Create new Task"
            type="text"
            value={todo}
            id="task__input"
          />
          <button type="submit" onClick={addTodo} htmlFor="task__input">
            +
          </button>{' '}
        </li>{' '}
        {todos.map((item) => {
          const { name, complete, id } = item
          return <Task id={id} key={id} complete={complete} name={name} />
        })}
        {/* <li className="task__item">
                      <div>
                        <input type="radio" name="checked" id="task__new" />
                        <h2> Create new ticket example </h2>{' '}
                      </div>{' '}
                      <label className="new" htmlFor="task__new">
                        New{' '}
                      </label>{' '}
                    </li>{' '}
                    <li className="task__item">
                      <div>
                        <input type="radio" name="" id="task__default" />
                        <h2> Update ticket report </h2>{' '}
                      </div>{' '}
                      <label className="default" htmlFor="task__default">
                        default{' '}
                      </label>{' '}
                    </li>{' '} */}{' '}
      </ul>{' '}
    </form>
  )
}

export default Tasks
