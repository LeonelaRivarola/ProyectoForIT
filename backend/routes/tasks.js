
const express = require('express');
const router = express.Router();

let tasks = [];
let idCounter = 1;

//Endpoints
router.get('/', (req, res) => { res.json(tasks); });
router.post('/', (req, res) => {
    const { title, completed } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'El titulo es obligatorio' });
    }
    const newTask = { id: idCounter++, title, completed: completed || false };
    tasks.push(newTask);
    res.status(201).json(newTask);
});
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    const task = tasks.find(t => t.id == id);

    if(!task) return res.status(404).json({error : 'Tarea no encontrada'});
    if(title !== undefined) task.title = title;
    if(completed !== undefined) task.completed = completed;

    res.json(task);
});
router.delete('/:id', (req, res) => {
    const {id} =req.params;
    tasks = tasks.filter(t=> t.id != id);
    res.status(204).end();
});

module.exports = router;