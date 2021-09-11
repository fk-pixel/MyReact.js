/* const tasks = [
    {
        id: 1,
        text: 'Doctor Appoinment',
        day: 'Feb 5th at 2:30',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 15th at 5:30',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 2th at 6:00',
        reminder: false,
    },
] */
//import { Fatimes } from 'react-icons/fa'
import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {  
    
    return (
        <>
          {tasks.map((task, index) => (
          <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} /> 
          ))} 
        </>
    )
}

export default Tasks
