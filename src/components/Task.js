import data from './data/tasksdb.json'

const Tasks = () => {
    return (
        <div>
        {data.map(task => (
            <h3 key={task.id}>{task.text}</h3>
        ))}
          </div>
      );
    
}
 
export default Tasks;