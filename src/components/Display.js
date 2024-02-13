import React from 'react'
import Task from './Task';

const Display = (props) => {
    
  return (
    <>
        {props.tasks.map((task,index) => {
            return <Task task={task} index={index} 
            deleteTask={props.deleteTask} check={props.check} 
            setCheck={props.setCheck} isChecked={props.checkedTasks.includes(index)}
            toggleTask={props.toggleTask} 
             />
        })}       
      
    </>
  )
}

export default Display
