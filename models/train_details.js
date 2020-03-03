'use strict';
module.exports = (sequelize, DataTypes) => {
  const Train_Details = sequelize.define('Train_Details', {
    TrainName: DataTypes.STRING,
    Depart_Time: DataTypes.TIME,
    Arrival_Time: DataTypes.TIME,
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    date: DataTypes.DATE,
    fare: DataTypes.STRING
  }, {});
  Train_Details.associate = function(models) {
    // associations can be defined here
  };
  return Train_Details;
};