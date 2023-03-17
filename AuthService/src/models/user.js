'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const bcrypt = require('bcrypt');
  const { SALT } = require('../config/serverConfig');
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //many to many association
      this.belongsToMany(models.Role, {
        through : 'User_Roles'
      })
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 300]
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  //hook that takes a cb, and encrypt user password
  User.beforeCreate((user)=>{
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
  })
  return User;
};