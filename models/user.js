'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthYear: DataTypes.INTEGER,
    presentation: DataTypes.STRING,
    picture: DataTypes.STRING,
    carBrand: DataTypes.STRING,
    carPicture: DataTypes.STRING,
    carRegistrationNumber: DataTypes.STRING,
    fbId: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};