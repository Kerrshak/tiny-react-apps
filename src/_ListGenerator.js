import { useState } from "react"
import TaskList from './_TaskList'
import TaskAdder from './_TaskAdder'
import ClearTasks from './_ClearTasks'

const ListGenerator = () => {
    const [listItems, setListItems] = useState([
        {task: "Watch Shrek", done: true}, 
        {task: "Watch Shrek 2", done: false}, 
        {task: "Rewatch Shrek", done: false},
        {task: "Bin Scared Shrekless", done: true}
    ])
        
    return <main>
        <TaskAdder setListItems={setListItems}/>
        <div id="bottom-box">
            <h3>Outstanding tasks</h3>
            <ClearTasks setListItems={setListItems}/>
            <TaskList listItems={listItems} setListItems={setListItems}/>        
        </div>
    </main>
}

export default ListGenerator