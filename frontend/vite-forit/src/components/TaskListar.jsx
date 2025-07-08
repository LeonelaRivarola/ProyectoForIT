import { useEffect, useState  } from "react";
import TaskVer from './TaskVer';

const API = import.meta.env.VITE_API_URL;

export default funtion TaskListar(){
    const [tasks, setTasks] = useState[];

    const fetchTasks = async ()=> {
        const res = await fetch(`${API}/tasks`);
        const data = await res.json();
        setTasks(data);
    };

    return(
        <div>
            {tasks.map(task => (
                <TaskVer key ={task.id} task={task} onUpdate={fetchTasks}/>
            ))}
        </div>
    );
}