const controller={
    index:function(req,res){
        res.render('home')
    },
    register:function(req,res){
       return res.render('register')
    },
    login:function(req,res){
        res.render('login')
    }
}

module.exports=controller