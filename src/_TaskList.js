function TaskList({listItems, setListItems}) {
    function handleCheck(index){
        let tempList = [...listItems]
        tempList[index].done = !tempList[index].done
        setListItems(tempList)
    }

    function RemoveItem(index){
        setListItems(listItems.filter((task, currIndex) => index !==currIndex))
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
                    {task.task}<button onClick={() => RemoveItem(index)}>Remove</button> </li>
                )
            })}
        </ul>
    </div>
}

export default TaskList
