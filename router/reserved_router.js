const router2=(app)=>{
    const reseved_Details = require('../controller/reserved_details');
    const jwt = require("jsonwebtoken");
    app.post('/reservedadd',async function(req,res){
        console.log(req.body);
        var result=await reseved_Details.reservedadd(req,res);
        console.log("//",result);
        res.send(result)
    });
    app.post('/trainuser',async function(req,res){
        const token=req.body.token;
       await jwt.verify(token,'secretkey' ,async (err,authData)=>{
                res.send(authData);
          })
      })
      app.post('/completedbooking',async function(req,res){
        console.log(req.body);
        var result=await reseved_Details.completedbooking(req,res);
        
        res.send(result)
       
      });

      app.post('/upcomingbooking',async function(req,res){
  
        console.log(req.body);
        var result=await reseved_Details.upcomingbooking(req,res);
        console.log("//",result);
        res.send(result)
       
      });
      
      app.post('/reservedemail',async (req,res)=>{
  
        console.log(req.body);
        await reseved_Details.reservedemail(req,res);
        // res.send(result)
    })
}


module.exports=router2;
