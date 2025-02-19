const express=require('express');
const app= express();
const routes = require('./routes'); 
app.use(routes)
require('dotenv').config();
const {connectDB,getConnection}=require('./database');
const port =8000;
app.get('/ping',(req,res)=>{
    res.send('Pong!');
})
connectDB();
app.get('/',(req,res)=>{
    console.log("Connected");
    res.send(getConnection());
})
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
}); 