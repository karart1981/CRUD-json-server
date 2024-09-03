import React from 'react'
import {useState} from 'react'
const Status = ({tasks}) => {
  const [status, setStatus] = useState(0)
  
  return (
    
    <div>
      <h1>
      {
        <p>
          {
            
          }
          / {tasks.length}
        </p>
      }
      </h1>
    </div>
  )
}

export default Status
