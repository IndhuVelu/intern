const router=(app)=>{
    const Signup=require('../controller/signup');
     const jwt = require("jsonwebtoken");

    app.post('/signup',async(req,res)=>{
        console.log(req.body)
        var result=await Signup.create(req,res);
        console.log('signup',result)
        res.send(result)
    });
    app.post('/head',(req,res)=>{
        const token=req.body.token;
        console.log(req.body)
        jwt.verify(token,'secretkey' ,async (err,authData)=>{
           
               await res.send(authData);
                console.log(authData);    
          })
      })

      app.post('/login',async (req,res)=>{
        console.log(req.body)
        var result=await Signup.login(req,res);
        res.send(result)
      });
      
      app.post('/email',async (req,res)=>{
        console.log(req.body)
        var result=await Signup.email(req,res);
        res.send(result)
      
      })

      app.post('/ResetEmail',async function(req,res){
        console.log(req.body)
        var result=await Signup.ResetEmail(req,res);
        res.send(result)
    
      });
      
     
     
    
       
    
}

   
module.exports=router;