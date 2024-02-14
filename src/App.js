import React, { useState } from 'react'
import Form from './components/Form';
import Display from './components/Display';
import "./App.css"
import Header from './components/Header';


const App = () => {
  const [task,setTask] = useState("");
  const [eTask,setETask] = useState("");
  const [tasks,setTasks] = useState([]);
  const [checkedTasks, setCheckedTasks] = useState([]);
 

  const saveTask = (task) => {
    
    if(task!==""){
      setTasks([...tasks,{task:task,isEditing:false}]);
      setTask("");
    }
    else{
      alert("Please enter the task !! ")
    }
     
  }
  const deleteTask = (id) => {
    const isTaskChecked = checkedTasks.includes(id);
  
    // Remove the task if its checkbox is selected
    if (isTaskChecked) {
      setTasks(tasks.filter((t, i) => i !== id));
      // Also remove the corresponding checked state
      setCheckedTasks(checkedTasks.filter((index) => index !== id));
    }

  }
  const toggleTask = (id) => {
    if (checkedTasks.includes(id)) {
      setCheckedTasks(checkedTasks.filter((index) => index !== id));
    } else {
      setCheckedTasks([...checkedTasks, id]);
    }
  };

  const editTask = (ind) => {
  setTasks(tasks.map((t,index) => index === ind ? {...t,isEditing:!t.isEditing} : t))
  }

  const updateTask = (etask,id) => {
    
    setTasks(tasks.map((t,i) => i === id ? {task:etask,isEditing : !t.isEditing} : t) );
    setETask("");

    alert("Task Updated !!")
    
  }

  

  return (
    <div className='container'>
       <Header/>
       <Form task={task} setTask={setTask} save={saveTask} /> 
       <Display tasks={tasks} deleteTask={deleteTask} 
       checkedTasks={checkedTasks}
       toggleTask={toggleTask}
       editTask={editTask}
       eTask={eTask} setETask={setETask} updateTask={updateTask}
       

       />      
       
    
    </div>
  )
}



export default App
