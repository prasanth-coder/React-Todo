import React from 'react'
import "./Task.css"
const Task = (props) => {
  
  return (
    props.isEdit === true ? <div className='form task-container'><div>
    <input placeholder='update Task' value={props.eTask} onChange={(e) => props.setETask(e.target.value) }/>
</div>
<div>
    <button onClick={() => props.updateTask(props.eTask,props.index)}>update Task</button>
</div></div> : 
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
        <button onClick={() => props.editTask(props.index)}>edit</button>
      </div>
      <div>
        <button onClick={() => props.deleteTask(props.index)}>remove</button>
      </div>
      
      
    </div>
  )
}

export default Task
