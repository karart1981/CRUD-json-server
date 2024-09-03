import React from 'react'
import Task from './Task'

const TaskList = ({tasks,onDel}) => {
  return (
    <div>
       <h2>Task List</h2>
       <div className="list">
         {
           tasks.map(task=> <Task key={task.id} task={task} onDel={onDel}/>)
         }
       </div>
    </div>
  )
}

export default TaskList
