'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    actor: DataTypes.STRING,
    image_path: DataTypes.STRING
  }, {});
  Movie.associate = function(models) {
     Movie.hasMany(models.Pedido)
   //  associations can be defined here
  };
  return Movie;
};