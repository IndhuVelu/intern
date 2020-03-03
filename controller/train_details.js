var train_detail = require('../models').Train_Details;

const train_details=()=>{

}

train_details.fromsort=async(req,res)=>{
        let response;
        var Op=require('sequelize').Op
        var from = req.body.startingLocation;
        console.log(from);
       response= await train_detail.findAll({
          attributes:['from'],
          where:{
          from:{
            [Op.like]:`%${from}%`
          }
        }
        })
      return response;
    
}
train_details.tosort=async(req,res)=>{

        var Op=require('sequelize').Op
        var to = req.body.endingLocation;
        console.log(to);
       let response= await train_detail.findAll({
          attributes:['to'],
          where:{
          to:{
            [Op.like]:`%${to}%`
          }
        }
        })
      return response;
 
}
train_details.search=async(req,res)=>{
            console.log('sasa',req.body)
            var from = req.body.startingLocation;
            var to = req.body.endingLocation;
//             var date = req.body.date;
            var offset=req.body.offset;
           let response= await train_detail.findAll({
            where:{
                from: from,
                to:to,
                },
                order: [
                ['Depart_Time', 'ASC'],
                ['TrainName', 'ASC'],
            ],
            limit: 5,
            offset: (5*offset), 
            
            },)
            return response;
       
    }

    train_details.namesort=async(req,res)=>{
        var from = req.body.startingLocation;
        var to = req.body.endingLocation;
        let response= await train_detail.findAll({
          where:{
            from: from,
            to:to,
            },
            order: [
              ['TrainName', 'ASC'],
          ],
        },)
        return response;
   
    }
    train_details.namerevsort=async(req,res)=>{
        var from = req.body.startingLocation;
        var to = req.body.endingLocation;
        let response= await train_detail.findAll({
          where:{
            from: from,
            to:to,
            },
            order: [
              ['TrainName', 'DESC'],
          ],
        },)
        return response;
    
    }

    train_details.arrivalsort=async(req,res)=>{
        var from = req.body.startingLocation;
        var to = req.body.endingLocation;
       let response= await train_detail.findAll({
          where:{
            from: from,
            to:to,
            },
            order: [
              ['Arrival_Time', 'ASC'],
          ],
        },)
        return response;

    }

    train_details.arrivalrevsort=async(req,res)=>{
        var from = req.body.startingLocation;
        var to = req.body.endingLocation;
       let response= await train_detail.findAll({
          where:{
            from: from,
            to:to,
            },
            order: [
              ['Arrival_Time', 'DESC'],
          ],
        },)
        return response;
  
    }

    train_details.departsort=async(req,res)=>{
        var from = req.body.startingLocation;
        var to = req.body.endingLocation;
        let  response= await train_detail.findAll({
          where:{
            from: from,
            to:to,
            },
            order: [
              ['Depart_Time', 'ASC'],
          ],
        },)
        return response;
    
    }
    train_details.departrevsort=async(req,res)=>{
        var from = req.body.startingLocation;
        var to = req.body.endingLocation;
       let response = await train_detail.findAll({
          where:{
            from: from,
            to:to,
            },
            order: [
              ['Depart_Time', 'DESC'],
          ],
        },)
        return response;
      
    }



module.exports=train_details;
