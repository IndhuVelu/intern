'use strict';
module.exports = (sequelize, DataTypes) => {
  const reserved_Details = sequelize.define('reserved_Details', {
    Trainid: DataTypes.INTEGER,
    seat: DataTypes.INTEGER,
    signup_name: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  reserved_Details.associate = function(models) {
    // associations can be defined here
  };
  return reserved_Details;
};