'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    UserId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    fechaEntrega: DataTypes.STRING,
    fechaRecogida: DataTypes.STRING
  }, {});
  Pedido.associate = function(models) {
    Pedido.belongsTo(models.User);
    Pedido.belongsTo(models.Movie);
    
    // associations can be defined here
  };
  return Pedido;
};