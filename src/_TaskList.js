function TaskList({listItems, setListItems}) {
    function handleCheck(index){
        let tempList = [...listItems]
        tempList[index].done = !tempList[index].done
        setListItems(tempList)
    }

    function RemoveItem(index){
        setListItems(listItems.filter((task, currIndex) => index !==currIndex))
    }

    return <ul>
            {listItems.map((task, index) => {
                return (
                    <div id="task-list">
                        <li key={`${index}`}>
                            <input className="checkbox"
                            checked={task.done}
                            type="checkbox"
                            onChange={() => handleCheck(index)}/>
                            {task.task}</li><button className="right-align-button" onClick={() => RemoveItem(index)}>X</button>
                    </div>
                )
            })}
        </ul>
}

export default TaskList
