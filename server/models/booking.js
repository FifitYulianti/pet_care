'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    get formatDate() {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return (new Date(this["schedule"])).toLocaleDateString('id-ID', options)
    }
    get price(){
      if (this.IdCategory === 1) {
        this.harga = 75000
      } else if (this.IdCategory === 2 || this.IdCategory === 3) {
        this.harga = 100000
      } else {
        this.harga = 170000
      }
      return this.harga
    }

    static associate(models) {
      // define association here
      Booking.belongsTo(models.User, { foreignKey: 'IdUser' })
      Booking.belongsTo(models.Category, { foreignKey: 'IdCategory' })
      Booking.hasMany(models.Transaction, { foreignKey: 'IdBooking' })
    }
  }
  Booking.init({
    petName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Pet Name Harus Diisi"
        }
      }
    },
    schedule: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Schedule Grooming Harus Diisi'
        }
      }
    },
    IdCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Id Category Harus Diisi'
        }
      }
    },
    IdUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Id User Harus Diisi'
        }
      }
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Harga Harus Diisi'
        }
      }
    },
  imgUrl: {
    type: DataTypes.STRING
  }
  }, {
    hooks: {
      beforeCreate: (data) => {
        if (data.IdCategory === 1) {
          data.harga = 75000
        } else if (data.IdCategory === 2 || data.IdCategory === 3) {
          data.harga = 100000
        } else {
          data.harga = 170000
        }
      }
    },
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};