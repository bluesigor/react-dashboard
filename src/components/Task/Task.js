import React from 'react'
import { useTodoContext } from '../../contexts/TodoContext'
import './style.scss'
const Task = ({ id, name, complete }) => {
  const { handleComplete } = useTodoContext()
  return (
    <li key={id} className="task__item">
      <div>
        <input
          onClick={handleComplete}
          type="checkbox"
          name=""
          id="task__urgent"
        />
        <h2> {name} </h2>{' '}
      </div>{' '}
      <label className={complete ? 'new' : 'urgent'} htmlFor="task__urgent">
        {complete ? 'new' : 'urgent'}
      </label>{' '}
    </li>
  )
}

export default Task
