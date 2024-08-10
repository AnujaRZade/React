
import ListItems from "../listItems/ListItems";
import InputBox from "../inputBox/InputBox";
import { useState } from "react";
import './todo.css'

const Todo = () => {

    const [taskItems, setTaskItems] = useState([]);//contains array
    const newtaskItems = [...taskItems]; //shallowcopy

    //passing the state value from child to parent component 
    //via function as props from parent to child is called lifting state up
    // Lifting State Up:
    // The function takeTask is passed down to the InputBox component via the addTask prop.
    // When a new task is added in InputBox, it calls takeTask, which updates the taskItems state in Todo.
    const takeTask = (value) => {    //this fn is invoked from inputbox and value=task
        console.log("Todo", value);
        // task passed from inputbox
        newtaskItems.push({
            id: Date.now(),
            taskName: value
        });
        setTaskItems(newtaskItems);
       
    }
    const deleteTask = (id) => {
        console.log("deleting", id);
        const restOfTasks = taskItems.filter((task) => {
            return task.id !== id;
        })
        setTaskItems(restOfTasks);
    }



    return (
        <>
            <h1>Todo component</h1>
            <div className="todo-wrapper">
                <InputBox addTask={takeTask} />
                {/* //addTask is a method here from inputbox */}

                <ListItems taskItems={taskItems} deleteTask={deleteTask} />
                {/* passing taskitems arrays to listItem component */}
                {/* //taskItems here are props/state variable */}
            </div>
        </>
    )
}
export default Todo;