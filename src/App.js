import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';
import data from './components/data/tasksdb.json'
import AddTask from "./components/AddTask";


function App() {
  //have data in App for global state (easier to reuse the data in other components)
  const [dbTasks, setdbTasks] = useState(data);
  const [showAddTask, setShowAddTask] = useState(false)

  //Add Task
  const addTask = (taskItem) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...taskItem}
    setdbTasks([...data, newTask])
  }

  //Delete Tasks
  const deleteTask = (id) => {
    setdbTasks(dbTasks.filter(taskItem => taskItem.id !== id))
  }

  //toggle reminder 
  const toggleReminder = (id) => {
    setdbTasks(dbTasks.map(taskItem => taskItem.id === id ? {...taskItem, reminder: !taskItem.reminder} : taskItem ))
  }

  return (
    <div className="app-container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}
      />}
      {
        dbTasks.length > 0 ? <Tasks 
        tasksItems={dbTasks} 
        onDelete={deleteTask}
        onToggle={toggleReminder}/> : "Nothing here!" 
      }
    
    </div>
  );
}

export default App;
