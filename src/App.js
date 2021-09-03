import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';
import data from './components/data/tasksdb.json'

function App() {
  //have data in App for global state (easier to reuse the data in other components)
  const [dbTasks, setdbTasks] = useState(data);

  //Delete Tasks
  const deleteTask = (id) => {
    setdbTasks(dbTasks.filter(taskItem => taskItem.id !== id))
  }

  return (
    <div className="app-container">
      <Header />
      {
        dbTasks.length > 0 ? <Tasks 
        tasksItems={dbTasks} 
        onDelete={deleteTask}/> : "Nothing here!" 
      }
    
    </div>
  );
}

export default App;
