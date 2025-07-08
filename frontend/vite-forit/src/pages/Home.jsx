import TaskListar from '../components/TaskListar';
import TaskForm from '../components/TaskForm';

export default funtion Home() {
    return(
        <div className="container">
            <h1>Lista de Tareas</h1>
            <TaskForm />
            <TaskListar />
        </div>
    );
}