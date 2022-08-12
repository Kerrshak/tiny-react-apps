import { useState } from "react"
import TaskList from './_TaskList'
import TaskAdder from './_TaskAdder'

const ListGenerator = () => {
    const [listItems, setListItems] = useState([{task: "Go on a run", done: false} , {task: "Go on another run", done: true}, {task: "Go on a long run", done: false}])
        
    return <main>
        <TaskAdder setListItems={setListItems}/>
        <h2>Outstanding tasks</h2>
        <TaskList listItems={listItems} setListItems={setListItems}/>        
    </main>
}

export default ListGenerator