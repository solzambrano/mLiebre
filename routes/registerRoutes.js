const express=require('express');
const router=express.Router();
const controller=require('../controller/controller')

router.get('/register',controller.register)



module.exports=router