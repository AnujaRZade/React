import { useState } from "react";



const InputBox = ({ addTask }) => {

    const [task, setTask] = useState('');

    const handleClick = () => {
        addTask(task);  //implementation of this function is defined in parent component means todo component
        setTask('');
        console.log(task);
    }
    return (
        <>
            <div className="Inputbox_conatiner">
                {/* //when value is empty default text of placeholder is displayed */}
                <input type="text" placeholder="enter your task here" value={task} onChange={(event) => { setTask(event.target.value) }} />
                <button onClick={ handleClick}>Add Task</button>
            </div>

        </>
    )
}
export default InputBox;