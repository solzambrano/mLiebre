const express=require('express');
const router=express.Router();
const controller=require('../controller/controller')

router.get('/login',controller.login)



module.exports=router