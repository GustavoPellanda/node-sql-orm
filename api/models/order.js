'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.People, {
        foreignKey: 'personId',
      });
    }
  }
  Order.init({
    orderDate: DataTypes.DATE,
    totalAmount: DataTypes.DECIMAL,
    personId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};