'use strict';
module.exports = (sequelize, DataTypes) => {
  var journey = sequelize.define('journey', {
    departureLabel: DataTypes.STRING
  }, {});
  journey.associate = function(models) {
    // associations can be defined here
  };
  return journey;
};