import React from 'react'
import "./Form.css"
const Form = (props) => { 
  
  return (
    <div className='form'>
        <div>
            <input placeholder='new Task' value={props.task} onChange={(e) => props.setTask(e.target.value) }/>
        </div>
        <div>
            <button onClick={() => props.save(props.task)}>save</button>
        </div>
      
    </div>
  )
}

export default Form
