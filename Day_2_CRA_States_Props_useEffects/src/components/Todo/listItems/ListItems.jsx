

const ListItems = ({ taskItems, deleteTask }) => {
    return (
        <>
            <div className="Listitem_conatiner">
                
                <ul>
                    {
                        taskItems && taskItems.length ? taskItems.map((taskItems) => {
                            return <li key={taskItems.id}>   <p> </p>  
                                {taskItems.taskName}  <p> </p>  
                                <button onClick={()=>{deleteTask(taskItems.id)}}>Delete this task</button>
                            </li>
                        }) : null
                    }

                </ul>
            </div>
        </>
    )
}
export default ListItems;