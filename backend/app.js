const express = require('express');
const app = express();
const PORT = 4978
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://shahmareazz:<Ezzah@588>@cluster0.l4zt9vc.mongodb.net/")
. then(()=>{
console.log('MongoDB connected successfully')
}).catch((err)=>{
console.log('Error connecting to MongoDB')
})
 app. get('/',(req,res)=>{
    res.send('server is running')
 })
 app.listen (PORT,()=>{
    console.log(`listening on port ${PORT}`);

 });
