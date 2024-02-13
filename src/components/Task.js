import React from 'react'
import "./Task.css"
const Task = (props) => {
  
  return (
    <div className='task-container'>
      <div>
      <input
          type='checkbox'
          checked={props.isChecked}
          onChange={() => props.toggleTask(props.index)}
        />
      </div>
      <div>
          <h2>{props.task}</h2>
      </div>
      <div>
        <button onClick={() => props.deleteTask(props.index)}>remove</button>
      </div>
      
      
    </div>
  )
}

export default Task
