import express from 'express';
import fs from 'fs';

const app=  express();

app.use(express.json());

const data_file= "./data.json";

app.get("/tasks", (req, res)=>{
    const data=fs.readFileSync(data_file);
    const tasks= JSON.parse(data);
    res.status(200).json(tasks);
})

app.post("/tasks", (req, res)=>{
   const data= fs.readFileSync(data_file, "utf-8");
   const tasks= JSON.parse(data);

   const newtask={
    id: Date.now(),
    title:req.body.title,
    completed:false
   };

   tasks.push(newtask);
   fs.writeFileSync(data_file, JSON.stringify(tasks, null, 2));
    res.status(201).json(newtask);
});


app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});