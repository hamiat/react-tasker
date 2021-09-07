import Task from './Task'

const Tasks = ({tasksItems, onDelete, onToggle}) => {

    return (
        <div>
        {tasksItems.map(taskItem => (
            <Task key={taskItem.id} 
            taskShoHey={taskItem} 
            deleteTaskShoHey={onDelete}
            toggleTask={onToggle}/>
        ))}
          </div>
      );
    
}
 
export default Tasks;