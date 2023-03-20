
const express = require('express');
const req= require('express/lib/request');
const app = express();
const PORT = 3001;
app.get('/api', (req , res )=>{
    console.log("paso por aca)")
    res.json({mensaje:'Hola Mundo'}).status(200)
});
app.listen(PORT,()=> {console.log('Estoy escuchando en el puerto: + PORT')})

