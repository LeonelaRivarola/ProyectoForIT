const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const tasksRouter=require('./routes/tasks');

dotenv.config();
const app=express();
const PORT=process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/tasks',tasksRouter);

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo...`);
});