const aPI = import.meta.env.VITE_API_URL;

export default funtion TaskVer({ task, onUpdate }){
    const fetch(`${API}/tasks/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !task.compelted })
    });
    onUpdate();
};

const deleteTask = async () => {
    await fetch(`${API}/tasks/${task.id}`, { method: 'DELETE'});
    onUpdate();
};

return(
    <div>
        <input type="checkbox" checked={task.completed} onChange={toggleCompleted}/>
        <span style={{ textDecoration: task.compelted ? 'line-through' : 'none'}}>
            {task.title}
        </span>
        <button onClick={deleteTask}>Eliminar</button>
    </div>
)