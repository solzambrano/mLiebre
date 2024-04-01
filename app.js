const express= require('express');
const path=require('path');
const app= express();
const port=process.env.PORT || 3000
const pathPublic=path.resolve(__dirname,'./public');
const index=require('./routes/indexRoutes');
const register=require('./routes/registerRoutes');
const login=require('./routes/loginRoutes');


app.listen(port,()=>{
    console.log( `servidor corriendo ${port}`)
})
app.use(express.static(pathPublic))
app.set('view engine','ejs')

app.listen(3030,()=>{
    console.log('puerto andando')
})

app.use('/',index);
app.use('/',register);
app.use('/',login);

