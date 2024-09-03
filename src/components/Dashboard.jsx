import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import TaskList from './TaskList';
import {AddTask} from './AddTask';
import Status from './Status';

const DashBoard = () => {
    const [tasks, setTasks] = useState([]);
    
    const addTask = task=> {
      setTasks([...tasks, task])
    }

    const handleDelete = id =>{
      setTasks(tasks.filter(x=> x.id != id))
    }

   

    useEffect(()=>{
        axios
       .get("http://localhost:3007/tasks")
       .then(response => {
        setTasks(response.data)
       })
    })
  return (
    <div className='dashboard'>
        <div className="d-flex p-4">
           <TaskList 
             tasks={tasks} 
             onDel={handleDelete} 
             
          />
           <AddTask onAdd={addTask}/>
        </div>
        <Status tasks={tasks}/>
    </div>
  )
}

export default DashBoard
