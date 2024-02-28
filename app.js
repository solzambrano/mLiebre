const express= require('express');
const path=require('path');
const app= express();
const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log( `servidor corriendo ${port}`)
})
const pathPublic=path.resolve(__dirname,'./public')
app.use(express.static(pathPublic))
app.listen(3000,()=>{
    console.log('puerto andando')
})

app.get('/',(req,res)=>{
res.sendFile(path.resolve(__dirname,'./views/home.html'))
})