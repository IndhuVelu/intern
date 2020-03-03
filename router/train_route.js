const router1=(app)=>{
    const Train_Details = require('../controller/train_details')

    app.post('/fromsort',async function(req,res){
        console.log(req.body)
        var result=await Train_Details.fromsort(req,res);
        res.send(result)
      });

      app.post('/tosort',async function(req,res){
        console.log(req.body)
        var result=await Train_Details.tosort(req,res);
        res.send(result)
      });

      app.post('/search',async function(req,res){
        var result=await Train_Details.search(req,res);
        res.send(result)
      });

      app.post('/namesort',async function(req,res){
        var result=await Train_Details.namesort(req,res);
        res.send(result)
      });

      app.post('/namerevsort',async function(req,res){
        var result=await Train_Details.namerevsort(req,res);
        res.send(result)
      });

      app.post('/arrivalsort',async function(req,res){
        var result=await Train_Details.arrivalsort(req,res);
        res.send(result)
      });

      app.post('/arrivalrevsort',async function(req,res){
        var result=await Train_Details.arrivalrevsort(req,res);
        res.send(result)
      });
      app.post('/departsort',async function(req,res){
        var result=await Train_Details.departsort(req,res);
        res.send(result)
      });

      app.post('/departrevsort',async function(req,res){
        var result=await Train_Details.departrevsort(req,res);
        res.send(result)
      });


}





module.exports=router1;