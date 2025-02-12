const express=require('express');
require('dotenv').config();
const {connectDB,getConnection}=require('./database');
const app= express();
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