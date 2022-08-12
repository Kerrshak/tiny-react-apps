function TaskList({listItems, setListItems}) {
    function handleCheck(index){
        let tempList = [...listItems]
        tempList[index].done = !tempList[index].done
        setListItems(tempList)
    }
    return <div>
        <ul>
            {listItems.map((task, index) => {
                return (
                    <li key={`${index}`}>
                        <input className="checkbox"
                        checked={task.done}
                        type="checkbox"
                        onChange={() => handleCheck(index)}/>
                    {task.task}</li>
                )
            })}
        </ul>
    </div>
}

export default TaskList
