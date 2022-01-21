'use strict';
const {
  Model
} = require('sequelize');
const booking = require('./booking');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Booking, {foreignKey: 'IdBooking'})
    }
  }
  Transaction.init({
    IdBooking: {
      type : DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg : 'Id Booking Harus Diisi'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};