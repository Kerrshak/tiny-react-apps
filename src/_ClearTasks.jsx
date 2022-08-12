const ClearTasks = ({setListItems}) => {
    const clearAllTasks = () => setListItems([])

    return <button onClick={clearAllTasks}>Clear</button>
}

export default ClearTasks