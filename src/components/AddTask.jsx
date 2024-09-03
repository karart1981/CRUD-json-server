import axios from "axios";
import {useState} from "react";

export const AddTask = ({onAdd}) => {
    const [text, setText] = useState("")
    const [error,setError] = useState("")

    const handleSubmit = e =>{
        e.preventDefault();
        if(!text.trim()){
          return setError("Please, fill the field")
        }
        setError("")

        axios
        .post("http://localhost:3007/tasks", {text, status:"unstarted"})
        .then(response=> {
            onAdd(response.data);
            setText("");
        })
    }
    return <div>
        {error && <p style={{color:"red"}}>{error}</p>}
        <p>AddTask</p>
        <form onSubmit={handleSubmit}>
            <input 
              className="form-control w-100"
              value={text}
              onChange={e=> setText(e.target.value)}
            />
            <button className="btn btn-success mt-3">Save</button>
        </form>
    </div>
}

