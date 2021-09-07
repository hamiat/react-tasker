
import { FaTimes } from 'react-icons/fa'

//states gets passed down (taskShoHey is from useState(data) in App)
//actions/events get passed up (the click event deleteTaskShoHey gets passed up to App (function deleteTask) )

const Task = ({taskShoHey, deleteTaskShoHey, toggleTask}) => {
    return (  
        <div className={`task ${taskShoHey.reminder ? 'reminder' : ''}`}
        onDoubleClick={() => toggleTask(taskShoHey.id)}>
            <h3>{taskShoHey.text} 
            <FaTimes 
            style={{color: 'red', cursor:'pointer'}}
            onClick={() => deleteTaskShoHey(taskShoHey.id)} /> </h3>
            <p>{taskShoHey.day}</p>
        </div>
    );
}
 
export default Task;