const Sequelize = require('sequelize');
const con ={}
const sequelize = new Sequelize('Trains', 'root', 'Nandhini@31', {
  host: 'localhost',
  dialect:  'mysql' ,
  


  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
con.sequelize = sequelize
con.Sequelize = Sequelize




module.exports =con;