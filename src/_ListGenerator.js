import { useState } from "react"
import TaskList from './_TaskList'
//import TaskCompleted from ''
//import TaskAdder from './_TaskAdder'

//, {task: "Go on another run", done: true}, {task: "Go on a long run", done: false}

const ListGenerator = () => {
    const [listItems, setListItems] = useState([{task: "Go on a run", done: false} , {task: "Go on another run", done: true}, {task: "Go on a long run", done: false}])

    // const taskCompleted = () => {
        
        // }
        
    return <main>
        <h2>Outstanding tasks</h2>
        <TaskList tasks={listItems} callback={setListItems}/>        
    </main>
}

export default ListGenerator