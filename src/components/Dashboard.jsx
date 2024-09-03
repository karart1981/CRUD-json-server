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

    const countStatus = tasks =>{
      tasks.map(task=>{
        
      })
    }

    useEffect(()=>{
        axios
       .get("http://localhost:3006/tasks")
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
