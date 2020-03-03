const SignUps=require('../models').SignUp;
const jwt = require("jsonwebtoken");
var  nodemailer = require("nodemailer");
const SignUp=()=>{

}

SignUp.create=async(req,res)=>{
let response
   try{
    await SignUps.create({
        Name:req.body.name,
        Email:req.body.email,  
        Password:req.body.password
    })
    response = {status:true}
   } 

   catch(e){
       console.log(e)
    response={status:false}
}
return response 
}

SignUp.login=async(req,res)=>{
    var name=req.body.name;
    var password=req.body.password;
    await SignUps.findOne({
       where:{
        Name: name,
        Password:password
        }
    })
    
    .then(()=>{
    
          const user = {
            name:name,
            password:password,
        
          };
          jwt.sign({user},'secretkey', (err,token) => {
            if (err) {
              res.sendStatus(403);
            } 
            else {
              res.json({
                token
              });
              
            }
          });
  
    })
    .catch(err=>{
        res.send(err);
    });
}
let transporter = nodemailer.createTransport({
 
    service: "gmail",
    auth: {
      user: 'indhunandhini983@gmail.com',
      pass: 'indhunandhini31599'
    }
  });
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take messages");
    }
  });
  

SignUp.email=async(req,res)=>{
    var changemail= req.body.changemail;
      
    await SignUps.findAll({
      where:{
       Email: changemail,
       
       },
   },)
   .then(result=>{
    if (result.length == 0) {
      console.log("not exits");
      res.send( "emaildoesnotexist");
    }
    else if (result.length > 0) {
      var mail = {
        from: "indhunandhini983@gmail.com",
        to: req.body.changemail,
        subject: "Password Recovery Email",
        text:
    
          "Please reset your passoword using the below link.  Reset Link:http://localhost:3000/resetpass/" +
          req.body.changemail +
          ""
      };
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          // console.log(err);
          res.json({msg: "fail", err: err});
        } else {
          // console.log(data);
          res.json({  msg: "success" });
        }
      });    
    }
    
   })
   .catch(err=>{
       res.send(err);
   });


}
SignUp.ResetEmail=async(req,res)=>{

    var newpass = req.body.newpass;
    var Email_id = req.body.Email_id;
  
    await SignUps.update({ Password: newpass }, {
      where: {
        Email: Email_id
      }
    })
    .then(result=>{
      res.json("updated")
    })
    .catch(err=>{
     res.send(err);
    });
  
  
}

   
module.exports=SignUp;