'use strict';
const {
  Model
} = require('sequelize');
var bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Booking, {foreignKey: 'IdUser'})
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Format Email Tidak Valid"
        },
        notEmpty: {
          msg: "Email Harus Diisi"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Password Harus Diisi"
        },
        isLength: {
          args: [5],
          msg: "Panjang minimal password 5 karakter"
        }
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Name harus diisi"
        }
      }
    },
    address: DataTypes.STRING,
    noHp: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user) =>{
        let hash = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))
        user.password = hash
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};