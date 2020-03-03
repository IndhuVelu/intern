'use strict';
module.exports = (sequelize, DataTypes) => {
  const SignUp = sequelize.define('SignUp', {
   
    Name: {type:DataTypes.STRING,unique:true},
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
  }, {});
  SignUp.associate = function(models) {
    // associations can be defined here
  };
  return SignUp;
};