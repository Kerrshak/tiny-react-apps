const ClearTasks = ({setListItems}) => {
    const clearAllTasks = () => setListItems([])

    return <button id="clear-button" onClick={clearAllTasks}>Clear</button>
}

export default ClearTasks