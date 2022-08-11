function TaskList({tasks, callback}) {



    return <div>
        <ul>
            {tasks.map((task, index) => {
                const handleClick = () => {
                    callback(() => {
                        return tasks.map((task, checkIndex) => {
                            if(index === checkIndex) {
                                return {task: task.task, done: !task.done}
                            } else return {task: task.task, done: task.done}
                        })})
                }

                if(task.done){
                    return <li key={`${index}`}><input className="checkbox" type="checkbox" defaultChecked onClick={handleClick}/>{task.task}{`${task.done}`}</li>
                }else{
                    return <li key={`${index}`}><input className="checkbox" type="checkbox" onClick={handleClick}/>{task.task}{`${task.done}`} </li>
                }
            })}
        </ul>
    </div>
}

export default TaskList