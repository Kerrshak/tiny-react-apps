function TaskList({tasks, callback}) {
    console.dir(callback)

    const handleClick = () => {
        setDone((currentTasks) => { console.log(currentTasks.done)
            return {...currentTasks, done: false}})
    }

    return <div>
        <ul>
            {tasks.map((task, index) => {
                if(task.done){
                    return <li key={`${index}`}><input className="checkbox" type="checkbox" defaultChecked onClick={handleClick}/>{task.task}</li>
                }else{
                    return <li key={`${index}`}><input className="checkbox" type="checkbox"/>{task.task} </li>
                }
            })}
        </ul>
    </div>
}

export default TaskList