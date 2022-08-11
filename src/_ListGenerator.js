import { useState } from "react"
//import TaskAdder from './_TaskAdder'
import TaskList from './_TaskList'
import TaskCompleted from ''

//, {task: "Go on another run", done: true}, {task: "Go on a long run", done: false}

function ListGenerator() {

    
    const [listItems, setListItem] = useState([{task: "Go on a run", done: false} /*, {task: "Go on another run", done: true}, {task: "Go on a long run", done: false} */])
    
    // const taskCompleted = () => {
        
        // }
        
    return <main>
        <h2>Outstanding tasks</h2>
        <TaskList tasks={listItems} callback={setListItem}/>        
    </main>
}

export default ListGenerator