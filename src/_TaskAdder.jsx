import { useState } from "react"

const TaskAdder = ({setListItems}) => {
    const [taskInput, setTaskInput] = useState("")

    const handleChange = (event) => {
        setTaskInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(taskInput){
            setListItems((currItems) => {
                return [...currItems, {task: taskInput, done: false}]
            })
            setTaskInput("")
        }
    }
    
    return <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="task-input">Task </label>
            <input 
                onChange={handleChange}
                id= "task-input"
                type="text"
                placeholder="enter your task here" 
                value={taskInput}
            />
            <button>Add</button>
        </form>
    </div>
}

export default TaskAdder