const express= require('express');
const path=require('path');
const app= express();
const port=process.env.PORT || 3000
const pathPublic=path.resolve(__dirname,'./public')
const router=express.Router();

app.listen(port,()=>{
    console.log( `servidor corriendo ${port}`)
})
app.use(express.static(pathPublic))
app.set('view engine','ejs')

app.listen(3030,()=>{
    console.log('puerto andando')
})
// D:\SOL - Backup Notebook\Datos\proyectosol\mercadoLiebre\views\formulario.html
// app.get('/',(req,res)=>{
// res.sendFile(path.resolve(__dirname,'./views/home.html'))
// })

app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})