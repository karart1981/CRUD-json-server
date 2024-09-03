import axios from 'axios';
import {useState} from 'react';
const Task = ({task,onDel}) => {
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleDelete = ()=>{
    axios
    .delete("http://localhost:3007/tasks/" + task.id, task.status)
    .then(response=>{
      onDel(response.data.id)
    })
  }
  
  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);

    axios
    .patch('http://localhost:3007/tasks/' + task.id, { status: newStatus})
    .then(response => {
      console.log('Success:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };
  
  return (
    
    <div>
      <p>{task.text}</p>
      <small>{task.status}</small>
      {
            task.status == 'in progress' 
            ? <img src="https://cdn2.iconfinder.com/data/icons/time-date-management-1/64/time__data_management-12-512.png" /> 
            :  task.status == "unstarted" 
            ? <img src="https://cdn3.iconfinder.com/data/icons/fluent-regular-24px-vol-5/24/ic_fluent_navigation_unread_24_regular-1024.png"/>
            : <img src="https://cdn2.iconfinder.com/data/icons/internet-download-manager-1/64/11_Completed_check_tick_verified_approved-1024.png" />
      }
      <select value={selectedStatus} onChange={handleStatusChange}>
        <option value="">Select status</option>
        <option value="unstarted">unstarted</option>
        <option value="in progress">in progress</option>
        <option value="completed">completed</option>
      </select>
      <button className="btn btn-warning ms-2" onClick={handleDelete}>x</button>
    </div>
  )
}

export default Task
