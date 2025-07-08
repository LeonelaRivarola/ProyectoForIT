import { useState } from 'react'
const API = import.meta.env.VITE_API_URL;

export default function TaskForm(){
    const [title, setTitle] = useState('');

    const createTask = async (e) => {
        e.preventDefault();
        if(!title.trim())return;
        await fetch(`${API}/tasks`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title})
        });
        setTitle('');
        location.reload();
    };

    return(
        <form onSubmit={createTask}>
            <input type="text" placeholder='Nueva Tarea' value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button type='submit'>Agregar</button>
        </form>
    );
}