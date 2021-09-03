import Task from './Task'

const Tasks = ({tasksItems, onDelete}) => {

    return (
        <div>
        {tasksItems.map(taskItem => (
            <Task key={taskItem.id} 
            taskShoHey={taskItem} 
            deleteTaskShoHey={onDelete}/>
        ))}
          </div>
      );
    
}
 
export default Tasks;