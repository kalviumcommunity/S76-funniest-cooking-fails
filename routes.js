const express =require('express');
const routes = express.Router();
const User=require('./schema.js')
routes.get('/',async(req,res)=>{
    const data = await User.find()
    if(!data)
        {
            res.status(404).send('not found')
        }
        
    res.json({message:'Data recieved'})
});
routes.delete('/delete/:id',async(req,res)=>{
    const {id}=req.params
    const data = await findByIdAndDelete(id)
    if(!data)
        {
            res.status(404).send('not found')
        }
        
    res.json({message:'Data deleted succesfully'})
});
routes.put('/',async(req,res)=>{
    const {name,des}=req.body
    const {id} = req.params
    const data = await findByIdAndUpdate(id,{name},{des},{country},{images}, {dishesfailed})
    if(!data)
    {
        res.status(404).send('not found')
    }
    res.json({message:'Data modified succesfully'})
});
routes.post('/',async(req,res)=>{
    const {name,des,images,dishesfailed,Country} = res.body
    const data = await save()
    if(!data)
        {
            res.status(404).send('not found')
        }
        
    res.json({message:'Data recieved succesfully'})
});

module.exports=routes;
